import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
  name: "jd", // Định danh slice
  initialState: {
    // Khai báo giá trị mặc định của state
    jobDescription: "",
    jobName: "",
  },
  reducers: {
    // Kết hợp giữa action creater và reducer
    get_job_description: (state, action) => {
      console.log(action);
      return { ...state, jobDescription: action.payload };
    },
    get_job_name: (state, action) => {
      console.log(action);
      return { ...state, jobName: action.payload };
    },
  },
});

// export actions
export const { get_job_description, get_job_name } = resumeSlice.actions;

// export reducer
export default resumeSlice.reducer;
