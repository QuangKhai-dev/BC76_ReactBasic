import React from 'react'
import styleButton from './button.module.css'
const Card = () => {
  return (
    <div className='bg-green-500 p-10'>
      <button className={styleButton.btn_dark}>Thêm nội dung</button>
    </div>
  )
}

export default Card