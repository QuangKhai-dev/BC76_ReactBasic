// import giúp file khác import được file này và sử dụng
import React from 'react'

const Header = () => {

  // thẻ jsx giúp viết html trong file js, jsx là object của react
  // nền màu đỏ, padding 30px, màu chữ trắng, font size 20px, canh giữa nội dung
  return (
    <div className='bg-[#ffd400] p-section-padding'>Header</div>
  )
}

// export giúp các file khác import được file này và sử dụng
export default Header