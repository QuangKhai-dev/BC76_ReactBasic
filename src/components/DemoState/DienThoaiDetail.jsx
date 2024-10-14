import React from 'react'

const DienThoaiDetail = (props) => {
  console.log(props)
  // props dạng readonly 
  return (
    <div className='p-5 border border-gray-300 rounded-md space-y-5'>
      <img src={props.dienThoai.hinhAnh} className='w-full' alt="" />
      <h3>{props.dienThoai.ten}</h3>
      <button onClick={() => {
        props.functionRender(props.dienThoai)
      }} className='py-2 px-5 bg-black text-white rounded-md'>Hiển thị thông số</button>
    </div>
  )
}

export default DienThoaiDetail