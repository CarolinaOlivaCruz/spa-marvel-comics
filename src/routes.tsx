import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/CartPage";
import HomePage from "./pages/HomePage";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  );
};

export default RoutesComponent;
