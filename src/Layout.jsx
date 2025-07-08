import { Outlet } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";


const Layout = () => {
  return (
    <>
      <MyNavbar />
      <div className="Outletcontainer mt-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
