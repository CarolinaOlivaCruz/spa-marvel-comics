import React from "react";
import { Route, Routes } from "react-router-dom";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/home" />
      <Route path="/cart" />
    </Routes>
  );
};

export default RoutesComponent;
