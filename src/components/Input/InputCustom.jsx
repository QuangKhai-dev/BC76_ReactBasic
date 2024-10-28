import { Input } from 'antd'
import React from 'react'

const InputCustom = ({ labelContent, placeholder, iconPrefix, name, onChange, value }) => {
  return (
    <div>
      <label htmlFor="" className='font-medium mb-2'>{labelContent}</label>
      <Input value={value} name={name} onChange={onChange} size="large" placeholder={placeholder} prefix={iconPrefix} />
    </div>
  )
}

export default InputCustom