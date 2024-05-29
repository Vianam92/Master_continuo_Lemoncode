import React from "react";
import { PictureInfo } from "./list.model";
import { data } from "../data";

type ContextProviderProps = {
  children: React.ReactNode;
};

interface UseContext {
  list: PictureInfo[];
  setList: React.Dispatch<React.SetStateAction<PictureInfo[]>>;
  listImages: PictureInfo[];
  setListImages: React.Dispatch<React.SetStateAction<PictureInfo[]>>;
}

export const CartContext = React.createContext<UseContext>({} as UseContext);

export const CartContextProvider = ({ children }: ContextProviderProps) => {
  const [list, setList] = React.useState([]);
  const [listImages, setListImages] = React.useState<PictureInfo[]>(data);

  return (
    <CartContext.Provider value={{ list, setList, listImages, setListImages }}>
      {children}
    </CartContext.Provider>
  );
};
