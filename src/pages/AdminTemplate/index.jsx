import { Outlet } from "react-router-dom";

export default function AdminTemplate() {
  return (
    <div>
      <h3>AdminTemplate</h3>
      <Outlet />
    </div>
  );
}
