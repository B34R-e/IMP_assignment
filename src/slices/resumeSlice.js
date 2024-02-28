import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
  name: "resume", // Định danh slice
  initialState: {
    // Khai báo giá trị mặc định của state
    resumeFile: null,
    importStatus: "",
    uploadStatus: "hidden",
    fileURL: "",
    newImage: null,
  },
  reducers: {
    // Kết hợp giữa action creater và reducer
    get: (state, action) => {
      return {
        ...state,
        resumeFile: action.payload,
      };
    },
    set_import_status: (state, action) => {
      return {
        ...state,
        importStatus: action.payload,
      };
    },
    set_upload_status: (state, action) => {
      return {
        ...state,
        uploadStatus: action.payload,
      };
    },
    set_file_url: (state, action) => {
      return { ...state, fileURL: action.payload };
    },
    set_new_image: (state, action) => {
      return { ...state, newImage: action.payload };
    },
  },
});

// export actions
export const {
  get,
  set_upload_status,
  set_import_status,
  set_file_url,
  set_new_image,
} = resumeSlice.actions;

// export reducer
export default resumeSlice.reducer;
