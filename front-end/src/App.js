import React from "react";
import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  Login,
  Register,
  Products,
  Orders,
  MyOrders,
  Checkout,
  SellerOrders,
  SellerDetails,
  Admin,
} from "./Pages/index";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/login" />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/customer/products" element={<Products />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/customer/orders" element={<MyOrders />} />
      <Route exact path="/customer/orders/:id" element={<Orders />} />
      <Route exact path="/customer/checkout" element={<Checkout />} />
      <Route exact path="/seller/orders/:id" element={<SellerDetails />} />
      <Route exact path="/seller/orders" element={<SellerOrders />} />
      <Route exact path="/admin/manage" element={<Admin />} />
    </Routes>
  );
}

export default App;
