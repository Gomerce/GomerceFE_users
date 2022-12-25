import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Cart from "../pages/CartPage";
import ItemPage from "../pages/ItemPage/";
import OrdersDetail from "../pages/OrdersDetail";
import OrdersHistory from "../pages/OrderHistory";
import SearchPage from "../pages/SearchPage";
import PageNotFound from "../pages/404 page/PageNotFound";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/Login";
import Checkout from "../pages/Checkout";
const Views = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/checkout" element={<Checkout />} />
      <Route exact path="/item-page" element={<ItemPage />} />
      <Route exact path="/order-detail" element={<OrdersDetail />} />
      <Route exact path="/order-history" element={<OrdersHistory />} />
      <Route exact path="/products/search" element={<SearchPage />} />
      <Route exact path="/login" element={<LogIn />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Views;
