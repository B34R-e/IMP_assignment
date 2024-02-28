import { createSlice } from "@reduxjs/toolkit";

const matchSlice = createSlice({
  name: "match",
  initialState: {
    isMatched: false,
    matchingData: null,
  },
  reducers: {
    click: (state, action) => {
      return { ...state, isMatched: !action.payload };
    },
    get_matching_data: (state, action) => {
      return { ...state, matchingData: action.payload };
    },
  },
});

export const { click, get_matching_data } = matchSlice.actions;

export default matchSlice.reducer;
