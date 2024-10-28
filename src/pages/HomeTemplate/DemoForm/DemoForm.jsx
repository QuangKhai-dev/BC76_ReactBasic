import { Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import InputCustom from '../../../components/Input/InputCustom'
import SelectCustom from '../../../components/Select/SelectCustom'
import ButtonCustom from '../../../components/Button/ButtonCustom'
import { useFormik } from 'formik'
import TableCustom from '../../../components/Table/TableCustom'


export const optionChucVu = [
  {
    label: "Trưởng phòng",
    value: "TP"
  },
  {
    label: "Giám đốc",
    value: "GĐ"
  },
  {
    label: "Hậu cần",
    value: "HC"
  }
]

const DemoForm = () => {
  const [listPerson, setListPerson] = useState([])
  // msnv, họ tên, email, số điện thoại, chức vụ, tiền lương
  // Giám đốc, trưởng phòng, hậu cần
  const { handleSubmit, handleChange, setFieldValue, values, setValues } = useFormik({
    // Dữ liệu mặc định dành cho các input (giống như đang tạo state quản lí dữ liệu)
    initialValues: {
      msnv: "abc",
      hoTen: "",
      email: "",
      soDienThoai: "",
      chucVu: "HC",
      tienLuong: ""
    },
    // Phương thức hoạt động khi form được submit, giúp xử lí các thao tác dữ liệu
    onSubmit: (values) => {
      console.log(values)
      const newListPerson = [...listPerson, values]
      setListPerson(newListPerson)
      // Đưa dữ liệu xuống localStorage
      // chuyển đổi dữ liệu thành chuỗi json 
      const dataString = JSON.stringify(newListPerson)
      localStorage.setItem("listPerson", dataString)
    }
  })

  const handleSetValueFormik = (fieldName, value) => {
    setFieldValue(fieldName, value)
  }

  useEffect(() => {
    const dataLocal = localStorage.getItem("listPerson") // null | []
    dataLocal && setListPerson(JSON.parse(dataLocal))
  }, [])


  // useEffect(() => {
  //   const data = {
  //     a: "FE140",
  //     b: "Quách Khải",
  //     c: "huhu@gmail.com",
  //     d: "0909111111",
  //     e: "HC",
  //     f: "10000000"
  //   }
  //   setValues(data)
  // }, [])

  // document.getElementById().onsubmit = function () {

  // }
  // Formik : name="msnv" => onChange=formik.handleChange

  return (
    <div>
      <h2 className='text-4xl font-medium'>Bài tập thực hành Formik và Yup</h2>
      <div className="container">
        <form onSubmit={handleSubmit} action="">
          <div className="grid grid-cols-2 gap-3">
            <InputCustom value={values.msnv} name="msnv" onChange={handleChange} labelContent="Mã số nhân viên" placeholder="Vui lòng nhập mã nhân viên" iconPrefix={<i className="fa-regular fa-id-card"></i>} />

            <InputCustom value={values.hoTen} name="hoTen" onChange={handleChange} labelContent="Họ tên" placeholder="Vui lòng nhập họ tên" iconPrefix={<i class="fa-regular fa-user"></i>} />

            <InputCustom value={values.email} name="email" onChange={handleChange} labelContent="Email" placeholder="Vui lòng nhập email" iconPrefix={<i class="fa-regular fa-envelope"></i>} />

            <InputCustom value={values.soDienThoai} name="soDienThoai" onChange={handleChange} labelContent="Số điện thoại" placeholder="Vui lòng nhập số điện thoại" iconPrefix={<i class="fa-solid fa-phone"></i>} />

            <SelectCustom
              name="chucVu"
              value={values.chucVu}
              onChange={handleSetValueFormik}
              options={optionChucVu}
              labelContent="Chức vụ"
            />
            <InputCustom value={values.tienLuong} name="tienLuong" onChange={handleChange} labelContent="Tiền lương" placeholder="Vui lòng nhập tiền lương" iconPrefix={<i class="fa-solid fa-sack-dollar"></i>} />
            <div className='space-x-3'>


              <ButtonCustom type='submit' buttonContent="Thêm nhân viên" className='bg-black text-white' />
              <ButtonCustom buttonContent="Reset Form" className='bg-red-500 text-white' />
              <ButtonCustom buttonContent="Cập nhật dữ liệu" className='bg-yellow-500 text-white' />

            </div>
          </div>
        </form>
        <TableCustom data={listPerson} />
      </div>
    </div>
  )
}

export default DemoForm