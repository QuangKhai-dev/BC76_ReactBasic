import React from 'react'

const ButtonCustom = ({ buttonContent, className = "", type = "button" }) => {
  return (
    <button type={type} className={`py-2 px-5 rounded-md ${className}`}>{buttonContent}</button>
  )
}

export default ButtonCustom