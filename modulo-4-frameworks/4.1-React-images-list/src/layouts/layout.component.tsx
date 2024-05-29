import React from "react";
import "./layout.css";

export const LayoutComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <section className="container">{children}</section>;
};
