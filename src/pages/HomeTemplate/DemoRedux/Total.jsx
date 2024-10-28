import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handlePlayGame } from '../../../redux/slice/xiNgauSlice'

const Total = () => {
  const dispatch = useDispatch()
  const { banChon, tongSoBanChoi, tongSoBanThang, ketQua } = useSelector((state) => state.xiNgauSlice)
  // Khi bấm vào nút play game, sẽ random ngẫu nhiên 3 con xí ngầu mới và sau đó tính tổng kết quả để xem người dùng thắng hay thua, nếu thắng thì Cộng tổng số bàn thắng và tăng số bàn chơi
  const renderType = (type) => type ? "Tài" : "Xỉu"
  return (
    <div className='py-10 text-center text-3xl space-y-3'>
      <p className='text-pink-500'>Bạn chọn: <span>{renderType(banChon)}</span></p>
      <p className='text-blue-500'>Tổng số bàn chơi: <span>{tongSoBanChoi}</span></p>
      <p className='text-orange-500'>Tổng số bàn thắng: <span>{tongSoBanThang}</span></p>
      <p className='text-green-600'>Kết quả: <span>{renderType(ketQua)}</span></p>
      <button onClick={() => {
        dispatch(handlePlayGame())
      }} className='py-2 px-5 bg-black text-white rounded-md'>PLay game</button>
    </div>
  )
}

export default Total