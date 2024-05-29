import { CartContext } from "@/core";
import { Card, Checkbox, FormLabel } from "@mui/material";
import React, { useEffect } from "react";

export const ImagesList: React.FC = () => {
  const { setList, listImages, setListImages } = React.useContext(CartContext);

  useEffect(() => {
    const selectedImages = listImages.filter((images) => images.selected);
    setList(selectedImages);

  }, [listImages]);

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const findIndex = listImages.findIndex((images) => images.id === id);
    if (findIndex !== -1) {
      const newImage = { ...listImages[findIndex], selected: e.target.checked };
      setListImages((prevState) =>
        prevState.map((image, i) => (i === findIndex ? newImage : image))
      );
    }
  };

  return (
    <article className="article-list">
      <h1>Listado de Gatitos</h1>
      <section className="contain-images">
        {listImages.map((images) => {
          return (
            <Card variant="outlined" key={images.id}>
              <img src={images.url} alt="" />
              <FormLabel htmlFor={images.id}>
                {" "}
                Adoptar
                <Checkbox
                  name=""
                  id={images.id}
                  checked={images.selected}
                  onChange={handleChangeCheckbox}
                />
              </FormLabel>
            </Card>
          );
        })}
      </section>
    </article>
  );
};
