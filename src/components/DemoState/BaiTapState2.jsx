import React, { useState } from 'react'
import DienThoaiDetail from './DienThoaiDetail'

const BaiTapState2 = () => {
  let arrDienThoai = [
    {
      hinhAnh: "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-thumbnew-600x600.jpg",
      ten: "Samsung S24 Ultra",
      giaTien: 28000000,
      cameraTruoc: "24MP",
      boNho: "128GB"
    },
    {
      hinhAnh: "https://cdn.tgdd.vn/Products/Images/42/305660/iphone-15-pro-max-gold-thumbnew-600x600.jpg",
      ten: "I phone 15 promax",
      giaTien: 32000000,
      cameraTruoc: "48MP",
      boNho: "1TB"
    },
    {
      hinhAnh: "https://cdn.tgdd.vn/Products/Images/42/309831/xiaomi-redmi-note-13-gold-thumb-600x600.jpg",
      ten: "Xiaomi Redmi Note 13",
      giaTien: 8000000,
      cameraTruoc: "36MP",
      boNho: "256GB"
    }
  ]
  // Tạo ra một state giúp quản lí dữ liệu thông tin chi tiết các sản phẩm điện thoại
  // dữ liệu mặc định hiển thị lên sẽ là sản phẩm đầu tiên có trong mảng arrDienThoai
  // Sau khi tạo state, thực hiện đưa các thông tin dữ liệu đang có trong state vào các thành phần jsx nằm trong div thông tin chi tiết
  // Với cấu trúc 3 phần tử đang hiển thị ở dưới, tạo một sự kiện click khi khách hàng bấm vào nút thông tin chi tiết, thay đổi thông tin của thẻ div đang có đúng với sản phẩm khách hàng đã bấm
  const [dienThoaiDetail, setDienThoaiDetail] = useState(arrDienThoai[0])

  function renderDienThoaiDetail(item) {
    setDienThoaiDetail(item)
  }

  return (
    <div>
      <div className="container">
        <h2>Bài tập hiển thị thông tin chi tiết của sản phẩm</h2>
        {/* hiển thị thông tin chi tiết sản phẩm  */}
        <div className='flex items-center'>
          <div className="w-4/12">
            <img src={dienThoaiDetail.hinhAnh} alt="" className='w-full' />
          </div>
          <div className="w-8/12">
            <h3>Tên sản phẩm: {dienThoaiDetail.ten}</h3>
            <p>Giá tiền: {dienThoaiDetail.giaTien}</p>
            <p>Camera trước: {dienThoaiDetail.cameraTruoc}</p>
            <p>Bộ nhớ: {dienThoaiDetail.boNho}</p>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-10'>
          {arrDienThoai.map((item, index) => {
            return <DienThoaiDetail hoTen="QuangKhai" dienThoai={item} functionRender={renderDienThoaiDetail} />
          })}
        </div>
      </div>
    </div>
  )
}

export default BaiTapState2