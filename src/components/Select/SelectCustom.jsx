import { Select } from 'antd'
import React from 'react'

const SelectCustom = ({ labelContent, options, onChange, name, value }) => {
  return (
    <div>
      <label className='font-medium mb-2' htmlFor="">{labelContent}</label>
      <Select
        value={value}
        onChange={(value, option) => {

          onChange(name, value)
        }}
        className='w-full'
        size='large'
        options={options}
      />
    </div>
  )
}

export default SelectCustom