import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { switchRoutes } from "./routes";
import { CartPage } from "@/scenes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};
