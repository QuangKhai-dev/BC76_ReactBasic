import React, { useState } from 'react'
import ListXe from './ListXe'
import ModalXeDetail from './ModalXeDetail'

const BaiTapRenderXe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false) // render --> re-render

  // Tạo một state để quản lí thông tin chi tiết xe
  const [xeDetail, setXeDetail] = useState() // dữ liệu mặc định | undifined
  // xử lí lấy dữ liệu chi tiết loại xe người dùng cần coi khi bấm setModalOpen
  // Đưa dữ liệu từ state xuống component modal để hiển thị thông tin chi tiết xe

  function setModalOpen(xe) {
    setIsModalOpen(true)
    // cập nhật giá trị xe vào state hiển thị thông tin chi tiết xe
    setXeDetail(xe)
  }


  function setModalCancel() {
    setIsModalOpen(false)
  }

  let arrListXe = [
    {
      id: 1,
      img: './imgCar/products/black-car.jpg',
      name: 'black car',
      price: 1000
    },
    {
      id: 2,
      img: './imgCar/products/red-car.jpg',
      name: 'red car',
      price: 2000
    },
    {
      id: 3,
      img: './imgCar/products/silver-car.jpg',
      name: 'silver car',
      price: 3000
    },
    {
      id: 4,
      img: './imgCar/products/steel-car.jpg',
      name: 'steel car',
      price: 4000
    }
  ]
  return (
    <div>
      <h2>Bài tập hiển thị danh sách xe</h2>
      {/* Hiển thị danh sách xe  */}
      <ListXe setModalOpen={setModalOpen} arrListXe={arrListXe} />


      {/* modal hiển thị thông tin chi tiết xe  */}
      <ModalXeDetail xeDetail={xeDetail} setModalCancel={setModalCancel} isModalOpen={isModalOpen} />
    </div>
  )
}

export default BaiTapRenderXe