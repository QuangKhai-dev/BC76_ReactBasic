// rxslice
import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  hoTen: "Quang Khải",
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    handleChangeValueHoTen: (state, action) => {
      console.log(current(state));
      console.log(action);
      // dữ liệu chuỗi từ input
      state.hoTen = action.payload;
    },
  },
});

export const { handleChangeValueHoTen } = inputSlice.actions;

export default inputSlice.reducer;
