import Header from './components/Header'
import Navigation from './components/Navigation'
import Content from './components/Content'
import Footer from './components/Footer'
import hinhAnh1 from './assets/img/img1.webp';
import BaiTapRenderDienThoai from './components/BaiTap/BaiTapRenderDienThoai';
import DemoState from './components/DemoState/DemoState';
import { DatePicker } from 'antd';
import BaiTapRenderXe from './components/BaiTap/BaiTapRenderXe/BaiTapRenderXe';
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <Routes>
        {/* Route định danh các tuyến đường (path)  */}
        <Route path="/dtdd" element={<div className='h-screen flex items-center justify-center text-4xl text-red-500'>Hello tôi là trang dtdd đây</div>} />
        {/* Tạo một tuyến đường cho trang chủ hiển thị component DemoState  */}
        <Route path='/' element={<DemoState />} />
      </Routes>
    </>
  )
}

export default App
