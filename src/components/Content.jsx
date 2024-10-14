import React from 'react'
import Card from './Card'

const Content = () => {
  return (
    <div className='layout-wrapper col-span-9 grid grid-cols-3 gap-10'>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Content