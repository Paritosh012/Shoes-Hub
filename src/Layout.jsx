import { Outlet } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";


const Layout = () => {
  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
