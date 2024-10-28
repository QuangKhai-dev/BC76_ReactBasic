import React from 'react'
import XiNgau from './XiNgau'
import Total from './Total'
import './baiTapXiNgau.scss'

const BaiTapXiNgau = () => {
  return (
    <div className='bai-tap-xi-ngau'>
      {/* // tiêu đề bài tập  */}
      <h2>Bài tập lắc xí ngầu</h2>
      {/* hiển thị 2 nút tài xỉu và 3 xí ngầu  */}
      <XiNgau />
      {/* tổng số bàn chơi, tổng số bàn thắng, kết quả, play game  */}
      <Total />
    </div>
  )
}

export default BaiTapXiNgau