import { Button, Input } from "@mui/material";
import React from "react";

interface Props {
  value: string;
  handlerGetValue: (value: string) => void;
  handlerClick: () => void;
}

export const FilterComponent: React.FC<Props> = (props) => {
  const handlerGetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    props.handlerGetValue(e.target.value);
  };

  const valueInput = props.value.charAt(0).toUpperCase() + props.value.slice(1);
  
  return (
    <div>
      <Input
        name="search"
        type="text"
        placeholder="Ej: lemoncode"
        onChange={handlerGetValue}
        value={valueInput}
      />
      <Button type="button" onClick={props.handlerClick}>Buscar</Button>
    </div>
  );
};
