import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleChangeBanChon } from '../../../redux/slice/xiNgauSlice'

const XiNgau = () => {
  const dispatch = useDispatch()
  const { xiNgau1, xiNgau2, xiNgau3 } = useSelector((state) => state.xiNgauSlice)
  // Tạo một action trên redux để xử lí
  // Khi người dùng bấm tài sẽ thay đổi nội dung bạn chọn thành Tài hoặc ngược lại
  const styleButton = 'bg-purple-500 p-20 text-4xl text-white rounded-md border-2 border-black'
  return (
    <div className='flex justify-between items-center'>
      <button onClick={() => {
        dispatch(handleChangeBanChon("tài"))
      }} className={styleButton}>Tài</button>
      <div className='grid grid-cols-3 gap-5'>
        <img className='h-20 w-20' src={`./gameXiNgau/${xiNgau1}.png`} alt="" />
        <img className='h-20 w-20' src={`./gameXiNgau/${xiNgau2}.png`} alt="" />
        <img className='h-20 w-20' src={`./gameXiNgau/${xiNgau3}.png`} alt="" />
      </div>
      <button onClick={() => {
        dispatch(handleChangeBanChon("xỉu"))
      }} className={styleButton}>Xỉu</button>
    </div>
  )
}

export default XiNgau