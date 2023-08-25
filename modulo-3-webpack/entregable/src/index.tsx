import React from "react";
import { createRoot } from "react-dom/client";
import { Cards } from "./components/cards";
import logo from "./content/logo_1.png";
import "./mystyles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <h1 className="container_title">Hola Mundo</h1>
    <img src={logo} alt="logo" className="container_logo"/>
    <Cards />
  </div>
);

