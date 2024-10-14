import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListMovie() {
  // một state dùng để quản lí dữ liệu từ BE
  // useEffect dùng để xử lí gọi API
  const [listMovie, setListMovie] = useState([]) // mảng (array)
  const navigate = useNavigate()
  console.log("Tôi là component ListMovie")
  console.log(listMovie)
  // Thực thi sau khi giao diện component hiển thị trên trang web
  // UseEffect này đang chạy quá trình quá trình mounting và ở đây là trạng thái của component didmount
  useEffect(() => {
    console.log("Tôi là useEffect nè")
    axios({
      method: "GET",
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      headers: {
        "TokenCyberSoft": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NiIsIkhldEhhblN0cmluZyI6IjIyLzA0LzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc0NTI4MDAwMDAwMCIsIm5iZiI6MTcxNzA4ODQwMCwiZXhwIjoxNzQ1NDI3NjAwfQ.Iie9ShKU1rDaiIMI3GWj3tVS2uHXQmVigj41m9N7KbQ"
      }
    }).then((res) => {
      console.log(res)
      setListMovie(res.data.content)

    }).catch((err) => {
      console.log(err)
    })
  }, [])

  function renderLayout() {
    console.log("Tôi là giao diện của component List Movie")
    return listMovie.map((phim, index) => (<div className="space-y-2">
      <img src={phim.hinhAnh} alt="" className="w-full" />
      <h3>{phim.tenPhim}</h3>
      <button onClick={() => {
        // chuyển hướng người dùng thông qua navigate từ react router dom
        navigate(`/about/${phim.maPhim}`)
      }} className="inline-block w-full py-2 px-5 bg-black text-white rounded-md">Mua ngay</button>
    </div>))
  }

  return (
    <div className="container">
      <h3>ListMovie</h3>
      <div className="grid grid-cols-4 mt-5 gap-5">
        {renderLayout()}
      </div>
    </div>
  );
}
