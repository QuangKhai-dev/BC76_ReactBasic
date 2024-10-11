import { Modal } from 'antd'
import React from 'react'

const ModalXeDetail = (props) => {
  // destructuring
  let { isModalOpen, setModalCancel, xeDetail } = props
  console.log(xeDetail)

  return (
    <Modal title={"Hiển thị thông tin xe"} open={isModalOpen}
      // onOk={() => {
      //   console.log("Tôi là nút ok")
      // }}
      onCancel={setModalCancel}
    >
      {/* {xeDetail && (
        <div>
          <img src={xeDetail.img} alt="" />
          <p>{xeDetail.name}</p>
          <p>{xeDetail.price}</p>
        </div>
      )} */}
      {xeDetail ? (<div>
        <img src={xeDetail.img} alt="" />
        <p>{xeDetail.name}</p>
        <p>{xeDetail.price}</p>
      </div>) : <p>Không có chiếc xe nào để hiển thị</p>}

    </Modal>
  )
}

export default ModalXeDetail