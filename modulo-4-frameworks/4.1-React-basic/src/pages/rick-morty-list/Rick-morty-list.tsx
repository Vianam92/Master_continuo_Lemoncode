import React, { ChangeEvent, useEffect, useState } from "react";
import { Characters } from "./api/rick-and-morty-mapper";
import { FormLabel } from "@mui/material";
import { useDebounce } from "use-debounce";
import { Link } from "react-router-dom";
import { routesDetail } from "@/core/router/routes";
import { rickAndMortyListRepository, rickAndMortySearchRepository } from "./api/repository";

export const RickAndMortyPage = () => {
  const [characterList, setCharacterList] = useState<Characters[]>([]);
  const [filterCharacter, setFilterCharacter] = useState<Characters[]>([
    ...characterList,
  ]);
  const [character, setCharacter] = useState<string>("");
  const [debounceFilter] = useDebounce(character, 1000);

  useEffect(() => {
    rickAndMortyListRepository().then((data) => setCharacterList(data));
  }, []);

  useEffect(() => {
    rickAndMortySearchRepository(character).then((data) => setFilterCharacter(data));
  }, [debounceFilter]);

  const handlerSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setCharacter(e.target.value);
  };

  return (
    <article className="container-list">
      <h1>Personajes Rick and Morty</h1>
      <FormLabel htmlFor="search">
        Buscador
        <input
          name="search"
          id="search"
          type="text"
          value={character}
          placeholder="Escribe el personaje"
          onChange={handlerSearch}
        />
      </FormLabel>
      <section className="characters-section">
        {filterCharacter.map((character) => {
          return (
            <div key={character.id}>
              <img alt={character.name} src={character.image} />
              <h3>{character.name}</h3>
              <Link to={routesDetail.rickMortyDetail(character.id.toString())}>Ver detalle</Link>
            </div>
          );
        })}
      </section>
    </article>
  );
};
