import { createSlice } from "@reduxjs/toolkit";
import { getRandomNumber } from "../../utils/utils";

const initialState = {
  xiNgau1: 5,
  xiNgau2: 3,
  xiNgau3: 6,
  banChon: true,
  tongSoBanChoi: 0,
  tongSoBanThang: 0,
  ketQua: true,
};

const xiNgauSlice = createSlice({
  name: "xiNgau",
  initialState,
  reducers: {
    // 1 tham số : "tài" | "xỉu"
    handleChangeBanChon(state, action) {
      // action.payload
      state.banChon = action.payload == "tài" ? true : false;
    },
    handlePlayGame(state, action) {
      // 1. Random 3 con xí ngầu ngẫu nhiên từ 1 đến 6
      // 2. Tính tổng để xem kết quả là tài hay xỉu
      // 3. So sánh xem người dùng thắng hay thua
      // 4. Cập nhật toàn bộ các dữ liệu cho redux
      // Math.random()
      let newXiNgau1 = getRandomNumber();
      let newXiNgau2 = getRandomNumber();
      let newXiNgau3 = getRandomNumber();
      // console.log(newXiNgau1, newXiNgau2, newXiNgau3);
      let ketQua = newXiNgau1 + newXiNgau2 + newXiNgau3 >= 11 ? true : false;
      let soSanh = state.banChon == ketQua ? true : false;
      state.xiNgau1 = newXiNgau1;
      state.xiNgau2 = newXiNgau2;
      state.xiNgau3 = newXiNgau3;
      state.ketQua = ketQua;
      state.tongSoBanChoi += 1;
      state.tongSoBanThang += soSanh ? 1 : 0;
    },
  },
});

export const { handleChangeBanChon, handlePlayGame } = xiNgauSlice.actions;

export default xiNgauSlice.reducer;
