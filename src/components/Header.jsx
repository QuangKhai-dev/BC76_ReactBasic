// import giúp file khác import được file này và sử dụng
import React from 'react'

const Header = () => {

  // thẻ jsx giúp viết html trong file js, jsx là object của react
  // nền màu đỏ, padding 30px, màu chữ trắng, font size 20px, canh giữa nội dung

  // Data binding
  // string, number, array(JSX)
  let hoTen = "Quang Khải"
  let classLayout = "bg-[#ffd400] p-section-padding"
  let sinhVien = {
    name: "Lý Tín",
    tuoi: 15
  }
  let theP = <div>Hello</div>
  // console.log(<div>Hello</div>)
  let arrString = ["Lan", "My", "Quỳnh", 4, 20, 15, <p>Hello Nhân</p>]
  let arrData = [
    {
      hoTen: "Chế Công Bình",
      tuoi: 40
    },
    {
      hoTen: "Trương Tấn Khải",
      tuoi: 35
    }
  ]
  let newArrData = arrData.map((item, index) => {
    return <div>
      <p>{item.hoTen}</p>
      <p>{item.tuoi}</p>
    </div>
  })
  // newArrData = [
  //   <div>
  //     <p>Chế Công Bình</p>
  //     <p>40</p>
  //   </div>,
  //   <div>
  //     <p>Trương Tấn Khải</p>
  //     <p>35</p>
  //   </div>
  // ]
  return (
    <div className={classLayout}>{hoTen}
      <div className={classLayout}>{10 + 15}</div>
      <p>{sinhVien.name}</p>
      <div>{theP}</div>
      <div>{arrString}</div>
      <div className="data">
        {newArrData}
      </div>
    </div>
  )
}

// export giúp các file khác import được file này và sử dụng
export default Header