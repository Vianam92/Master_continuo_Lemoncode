import React from "react";
import { Router } from "@/core";
import { LayoutComponent } from "./layouts";
import { CartComponent } from "./pods";
import { CartContextProvider } from "./core/list-cart/cart.context";

export const App = () => {
  return (
    <CartContextProvider>
      <LayoutComponent>
        <Router />
        <CartComponent />
      </LayoutComponent>
    </CartContextProvider>
  );
};
