import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home";
import { Network } from "../pages/networks";
import { SeeMore } from "../pages/more";


function RoutesCompontent() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/home' element={<HomePage />} />
      <Route path='/network' element={<Network />} />
      <Route path='/rede_uema' element={<SeeMore />} />


    </Routes>
  </BrowserRouter>
  );
}

export { RoutesCompontent }