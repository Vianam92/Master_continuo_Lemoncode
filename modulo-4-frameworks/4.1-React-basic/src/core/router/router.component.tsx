import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, ListPage, DetailPage } from "@/pages";
import { switchRoutes } from "./routes";
import { RickAndMortyPage } from "@/pages/rick-morty-list";
import { DetailRickAndMortyPage } from "@/pages/detail-rick-and-morty-page/detail";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginPage />} />
        <Route path={switchRoutes.list} element={<ListPage />} />
        <Route path={switchRoutes.rickMorty} element={<RickAndMortyPage />} />
        <Route path={switchRoutes.details} element={<DetailPage />} />
        <Route
          path={switchRoutes.rickMortyDetail}
          element={<DetailRickAndMortyPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
