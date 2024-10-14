import React, { useState } from 'react'

const BaiTapState1 = () => {
  // 16px, cứ mỗi lần click, giá trị của fontsize của h2 tăng thêm 2 hoặc 4px tuỳ thích,
  // giảm giá trị fontSize của h2 đi 2 hoặc 4px tuỳ thích
  let styleButton = 'py-2 px-5 text-white rounded'

  const [fontSize, setFontSize] = useState(16)
  // tang ==> tăng giá trị, giam ==> giảm giá trị
  function updateFontSize(type) {
    if (type == "tang") {
      setFontSize(fontSize + 2)
    } else if (type == "giam") {
      setFontSize(fontSize - 2)
    }
  }

  return (
    <div className='space-x-5'>
      <h2 style={{
        fontSize
      }} className='mb-10'>Thực hiện sử dụng và tạo state để giúp thực hiện tăng giảm font size cho nội dung đang có của thẻ h2</h2>
      <button onClick={() => {
        updateFontSize("tang")
      }} className={`${styleButton} bg-black`}>Tăng font size</button>
      <button onClick={() => {
        updateFontSize("giam")
      }} className={`${styleButton} bg-purple-500`}>Giảm font size</button>
    </div>
  )
}

export default BaiTapState1