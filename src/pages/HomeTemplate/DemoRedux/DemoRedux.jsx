import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleChangeValueHoTen } from '../../../redux/slice/inputSlice'
import BaiTapXiNgau from './BaiTapXiNgau'
import BaiTapShoes from './BaiTapShoes'

const DemoRedux = () => {
  const dispatch = useDispatch()
  const { hoTen } = useSelector((state) => state.inputSlice)
  return (
    <div>
      <h2>Demo về cách sử dụng redux toolkit</h2>
      <div>
        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(event) => {
          // console.log(event.target.value)
          dispatch(handleChangeValueHoTen(event.target.value))
        }}
          placeholder="John" value={hoTen} />
      </div>
      <BaiTapXiNgau />
      <BaiTapShoes />
    </div>
  )
}

export default DemoRedux