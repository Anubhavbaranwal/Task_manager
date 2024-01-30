import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";

const store = configureStore({
  reducer: {
    task: dataSlice,
  },
});

export default store;
