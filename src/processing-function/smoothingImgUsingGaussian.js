import cv from "opencv.js"; // Make sure to include OpenCV.js in your project

const processImage = (imageData, sigma) => {
  // Convert image data to grayscale
  const img = cv.matFromArray(imageData, cv.CV_8UC1);

  // Convert image to frequency domain
  const f = new cv.Mat();
  cv.dft(img, f, cv.DFT_COMPLEX_OUTPUT);

  // Generate Gaussian lowpass filter
  const rows = img.rows;
  const cols = img.cols;
  const gaussianFilter = cv.Mat.ones(rows, cols, cv.CV_32FC2);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const x = j - cols / 2;
      const y = i - rows / 2;
      gaussianFilter.data32F[i * cols * 2 + j * 2] = Math.exp(
        -(x * x + y * y) / (2 * sigma * sigma)
      );
      gaussianFilter.data32F[i * cols * 2 + j * 2 + 1] = 0;
    }
  }

  // Apply filter in frequency domain
  const filteredF = new cv.Mat();
  cv.mulSpectrums(f, gaussianFilter, filteredF, 0);

  // Inverse FFT
  const filteredImage = new cv.Mat();
  cv.dft(filteredF, filteredImage, cv.DFT_INVERSE | cv.DFT_REAL_OUTPUT);

  // Convert to Uint8Array for display
  const outputImageData = new Uint8Array(filteredImage.data);

  // Clean up
  img.delete();
  f.delete();
  gaussianFilter.delete();
  filteredF.delete();

  return new ImageData(outputImageData, cols, rows);
};

export default processImage;
