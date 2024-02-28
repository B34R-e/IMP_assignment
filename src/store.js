import { configureStore } from "@reduxjs/toolkit";
import jdReducer from "./slices/jdSlice";
import resumeReducer from "./slices/resumeSlice";
import matchReducer from "./slices/matchSlice";

const store = configureStore({
  reducer: {
    jdReducer,
    resumeReducer,
    matchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(
      {
        serializableCheck: false,
      }
      // serializableCheck: false;
    ),
});

export default store;
