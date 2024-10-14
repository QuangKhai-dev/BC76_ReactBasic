import React from 'react'
import './navigation.scss'
const Navigation = () => {
  return (
    <div className='bg-orange-500 p-10 col-span-3' id='navigation'>
      {/* module css - global css - css theo component  */}
      <img className='theHinhAnh' src="./public/img1.webp" alt="" />
      {/* màu chữ vàng, fs : 40px, canh giữa theo chiều ngang  */}
      <button className="btn_primary">Hello</button>
    </div>
  )
}

export default Navigation