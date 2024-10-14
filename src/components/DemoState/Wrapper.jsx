import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <div className='bg-red-500 p-2'>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Wrapper