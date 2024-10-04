import Header from './components/Header'
import Navigation from './components/Navigation'
import Content from './components/Content'
import Footer from './components/Footer'
import hinhAnh1 from './assets/img/img1.webp';
import BaiTapRenderDienThoai from './components/BaiTap/BaiTapRenderDienThoai';
function App() {

  return (
    <>
      <Header />
      <div className="grid grid-cols-12">
        <Navigation />
        <Content />
      </div>
      <Footer />
      {/* Cách đầu tiên để hiển thị hình ảnh  */}
      {/* <img src="./public/img1.webp" alt="" /> */}
      {/* Cách 2 để hiển thị hình ảnh  */}
      <div className="my-container">
        <button className="btn_dark">Cập nhật</button>
        <img className='theHinhAnh' src={hinhAnh1} alt="" />
      </div>
      <BaiTapRenderDienThoai />
    </>
  )
}

export default App
