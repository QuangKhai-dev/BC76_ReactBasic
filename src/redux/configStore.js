import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./slice/inputSlice";
import xiNgauSlice from "./slice/xiNgauSlice";
import shoesSlice from "./slice/shoesSlice";
export const store = configureStore({
  reducer: {
    inputSlice,
    xiNgauSlice,
    shoesSlice,
  },
});
