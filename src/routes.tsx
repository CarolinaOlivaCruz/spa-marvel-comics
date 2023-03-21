import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/cart" />
    </Routes>
  );
};

export default RoutesComponent;
