import { Table, Tag } from 'antd'
import React from 'react'
import { optionChucVu } from '../../pages/HomeTemplate/DemoForm/DemoForm'

const columns = [
  {
    title: "MSNV",
    dataIndex: "msnv",
    render: (text, record, index) => {
      // console.log(text)
      console.log(record)
      console.log(index)
      // dữ liệu lấy được từ thuộc tính cấu trong dataIndex
      return text
    }
  },
  {
    title: "Họ Tên",
    dataIndex: "hoTen"
  },
  {
    title: "Email",
    dataIndex: "email"
  },
  {
    title: "Số điện thoại",
    dataIndex: "soDienThoai"
  },
  {
    // Ở dữ liệu chức vụ, sẽ hiển thị chi tiết cho người dùng biết và sử dụng component từ antd là badge để hiển thị đẹp hơn
    title: "Chức vụ",
    dataIndex: "chucVu",
    render: (text, record, index) => {
      const checkLabel = optionChucVu.find((item) => {
        return text == item.value
      })
      return <Tag color='volcano'>
        {checkLabel.label}
      </Tag>
    }
  },
  {
    title: "Tiền Lương",
    dataIndex: "tienLuong"
  },
  {
    title: "Thao tác",
    render: () => {
      const styleButton = "py-2 px-5 rounded"
      return <div className='space-x-3'>
        <button className={`${styleButton} text-white bg-red-500`}>Xoá</button>
        <button className={`${styleButton} text-white bg-yellow-500`}>Sửa</button>
      </div>
    }
  }
]

const TableCustom = ({ data }) => {
  console.log(data)
  return (
    <Table
      columns={columns}
      dataSource={data}
    />
  )
}

export default TableCustom