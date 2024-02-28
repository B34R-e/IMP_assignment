import React from "react";
import { useDispatch, useSelector } from "react-redux";
import processImage from "../processing-function/smoothingImgUsingGaussian";
import { set_new_image } from "../slices/resumeSlice";

function ProcessImage() {
  const { resumeFile, newImage } = useSelector((state) => state.resumeReducer);
  const dispatch = useDispatch();

  const handleButton1Clicked = (resumeFile) => {
    const file = resumeFile;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, img.width, img.height);

        // Process the image and set the smoothed image data
        const sigma = 5; // Standard deviation of the Gaussian filter
        const smoothedImageData = processImage(imageData, sigma);
        // setSmoothedImageData(smoothedImageData);
        dispatch(set_new_image(smoothedImageData));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="process-image-container">
      <button className="form-control" onClick={handleButton1Clicked}>
        Button 1
      </button>
      <button className="form-control">Button 2</button>
      <button className="form-control">Button 3</button>
      <button className="form-control">Button 4</button>
      <button className="form-control">Button 5</button>
    </div>
  );
}

export default ProcessImage;
