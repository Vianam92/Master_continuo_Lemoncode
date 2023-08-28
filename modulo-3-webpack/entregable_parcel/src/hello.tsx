import { Cards } from "components/cards";
import React from "react";
const logo = require("./content/logo_1.png");
const classes = require("./main.scss");

export const HelloComponent: React.FC = () => {
  return (
    <div className="container">
    <h1 className="container_title">Hola Mundo</h1>
    <img src={logo} alt="logo" className="container_logo"/>
    <Cards />
  </div>
  );
};