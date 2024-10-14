import { useParams } from "react-router-dom";

export default function About() {
  const params = useParams()
  console.log(params)
  return (
    <div>
      <h3>About</h3>
      {/* 8 - 4  */}
      {/* 8 hình ảnh phim  */}
      {/* 4 thông tin phim (tên phim-đánh giá-độ hot-đang chiếu) */}
    </div>
  );
}
