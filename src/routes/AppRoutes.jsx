import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout";
import ViewProduct from "../pages/ViewProduct";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Paydone from "../pages/Paydone";
import Search from "../pages/Search";
import Nike from "../Brands/Nike";
import Puma from "../Brands/Puma";
import Redchief from "../Brands/Redchief";
import Adidas from "../Brands/Adidas";
import Footer from "../components/Footer";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/product/:id" element={<ViewProduct />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="paydone" element={<Paydone />} />
          <Route path="search/:txtval" element={<Search />} />
          <Route path="nike" element={<Nike />} />
          <Route path="puma" element={<Puma />} />
          <Route path="adidas" element={<Adidas />} />
          <Route path="/redchief" element={<Redchief />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="footer" element={<Footer />} />
          <Route
            path="*"
            element={
              <h2
                style={{
                  color: "yellow",
                  textAlign: "center",
                  fontSize: "80px",
                  margin: "100px ",
                }}
              >
                404 Not Found
              </h2>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
