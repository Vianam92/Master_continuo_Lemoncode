import { CartContext, PictureInfo } from "@/core";
import "./cart.component.styles.css";
import React from "react";
import { Box, Button, Card } from "@mui/material";

export const CartComponent: React.FC = () => {
  const { list, setList, setListImages, listImages } =
    React.useContext(CartContext);

  const updateList = () => {
    const updatedListImages = listImages.map((imageInListImages) => {
      const foundInList = list.some(
        (itemInList) => itemInList.id === imageInListImages.id
      );
      return { ...imageInListImages, selected: foundInList };
    });

    setListImages(updatedListImages);
  };

  const handleChangeCheckbox = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;

    const findIndex = list.findIndex((images) => images.id === id);
    if (findIndex !== -1) {
      list.splice(findIndex, 1);
    }
    setList([...list]);

    updateList();
  };

  const handlerEmptyList = (e: React.MouseEvent<HTMLButtonElement>) => {
    setList([]);
    const updatedListImages = listImages.map((image) => ({
      ...image,
      selected: false,
    }));

    setListImages(updatedListImages);
  };

  return (
    <article className="article-list">
      <div>
        {" "}
        <h2>Cart</h2>
        <Box component="section" sx={{ p: 2 }}>
          <Button variant="contained" onClick={handlerEmptyList}>
            Vaciar carrito
          </Button>
        </Box>
      </div>

      <section className="contain-images">
        {list.map((images) => {
          return (
            <Card variant="outlined" key={images.id}>
              <img src={images.url} alt="" />
              <Button id={images.id} onClick={handleChangeCheckbox}>
                Eliminar
              </Button>
            </Card>
          );
        })}
      </section>
    </article>
  );
};
