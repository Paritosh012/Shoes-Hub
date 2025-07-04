import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout";
import ViewProduct from "../pages/ViewProduct";
import Cart from "../pages/Cart";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/product/:id" element={<ViewProduct />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
