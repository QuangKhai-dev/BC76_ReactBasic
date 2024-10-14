import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Footer from "./components/Footer";
import hinhAnh1 from "./assets/img/img1.webp";
import BaiTapRenderDienThoai from "./components/BaiTap/BaiTapRenderDienThoai";
import DemoState from "./components/DemoState/DemoState";
import { DatePicker } from "antd";
import BaiTapRenderXe from "./components/BaiTap/BaiTapRenderXe/BaiTapRenderXe";
import { Route, Routes } from "react-router-dom";
import HomeTemplate from "./pages/HomeTemplate";
import Home from "./pages/HomeTemplate/Home";
import About from "./pages/HomeTemplate/About";
import ListMovie from "./pages/HomeTemplate/ListMovie";
import AdminTemplate from "./pages/AdminTemplate";
import Dashboard from "./pages/AdminTemplate/Dashboard";
import AddUser from "./pages/AdminTemplate/AddUser";

import { renderRoutes } from "./routes";

function App() {
  return (
    <>
      <Routes>
        {/* Route định danh các tuyến đường (path)  */}
        {/* <Route path="/dtdd" element={<div className='h-screen flex items-center justify-center text-4xl text-red-500'>Hello tôi là trang dtdd đây</div>} /> */}
        {/* Tạo một tuyến đường cho trang chủ hiển thị component DemoState  */}
        {/* <Route path='/' element={<DemoState />} /> */}

        {/* Định tuyến trang HomeTemplate - localhost:5173 */}
        {/* <Route path="" element={<HomeTemplate />}> */}
        {/* Định tuyến trang Home - localhost:5173 */}
        {/* <Route path="" element={<Home />} /> */}
        {/* Định tuyến trang About - localhost:5173/about */}
        {/* <Route path="about" element={<About />} /> */}
        {/* Định tuyến trang ListMovie - localhost:5173/list-movie */}
        {/* <Route path="list-movie" element={<ListMovie />} /> */}
        {/* </Route> */}

        {/* Định tuyến trang AdminTemplate - localhost:5173/admin */}
        {/* <Route path="admin" element={<AdminTemplate />}> */}
        {/* Định tuyến trang Dashboard - localhost:5173/admin/dashboard */}
        {/* <Route path="dashboard" element={<Dashboard />} /> */}

        {/* Định tuyến trang AddUser - localhost:5173/admin/add-user */}
        {/* <Route path="add-user" element={<AddUser />} /> */}
        {/* </Route> */}

        {renderRoutes()}
      </Routes>
    </>
  );
}

export default App;
