import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home";
import { Network } from "../pages/networks";
import { SeeMore } from "../pages/more";
import { Charts } from "../pages/charts";


function RoutesCompontent() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/home' element={<HomePage />} />
      <Route path='/network' element={<Network />} />
      <Route path='/rede_uema' element={<SeeMore />} />
      <Route path='/rede_uema/charts' element={<Charts />} />
    </Routes>
  </BrowserRouter>
  );
}

export { RoutesCompontent }