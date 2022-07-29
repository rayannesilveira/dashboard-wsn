import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {HomePage } from "../pages/home";

function RoutesCompontent() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/home' element={<HomePage />} />
    </Routes>
  </BrowserRouter>
  );
}

export { RoutesCompontent }