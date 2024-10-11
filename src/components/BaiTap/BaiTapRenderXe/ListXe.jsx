import React from 'react'

const ListXe = (props) => {
  console.log(props)
  // destructuring 
  let { arrListXe, setModalOpen } = props;
  return (
    <div>
      <h3>Danh sách xe</h3>
      {/* chia cấu trúc 4 cột  */}
      <div className='grid grid-cols-4 gap-5'>
        {arrListXe.map((xe, index) => {
          return (
            <div key={index} className='border p-2 space-y-3'>
              <img src={xe.img} alt={xe.name} />
              <p className='text-xl font-semibold capitalize'>{xe.name}</p>
              <p>{xe.price}</p>
              <button onClick={() => {
                setModalOpen(xe)
              }} className='bg-green-700 py-2 px-5 text-white rounded'>Xem chi tiết</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListXe