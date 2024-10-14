import React, { useState } from 'react'
import BaiTapState1 from './BaiTapState1'
import BaiTapState2 from './BaiTapState2'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'

const DemoState = () => {
  // giá trị đại diện cho state, phương thức giúp cập nhật dữ liệu từ state
  const [score, setScore] = useState()
  const [infoUser, setInfoUser] = useState({
    hoTen: "Quang Khải",
    lop: "BC76",
    diaChi: "Quận 3"
  })

  function handleScore() {
    setScore(score + 1)
  }

  console.log(infoUser)

  return (
    <div>
      <Link to="/dtdd" className='border-2 border-blue-500 py-2 px-5 rounded mt-2 ml-2 inline-block'>Bấm để chuyển hướng</Link>
      <h2 className='text-center text-4xl'>Bài tập Demo State trong React</h2>
      <div>
        <p>Số điểm {score}</p>
        <button onClick={handleScore} className='py-2 px-5 bg-black text-white rounded-md'>Tăng điểm số</button>
      </div>
      <div>
        <h3 className='text-2xl'>Bài tập thay đổi tên người dùng</h3>
        <input
          onChange={(event) => {
            console.log(event.target.value)
            setInfoUser({ ...infoUser, hoTen: event.target.value })
          }}
          type="text" placeholder='Vui lòng nhập tên mới' className='p-2 border border-black rounded' />
        <div>
          <h4>{infoUser.hoTen}</h4>
          <p>{infoUser.lop}</p>
          <p>{infoUser.diaChi}</p>
        </div>
      </div>
      <BaiTapState1 />
      <BaiTapState2 />
      <Wrapper>
        <input type="text" placeholder='Vui lòng nhập tên' />
      </Wrapper>
      <Wrapper>
        <button>Xem chi tiết</button>
      </Wrapper>
    </div>
  )
}

export default DemoState