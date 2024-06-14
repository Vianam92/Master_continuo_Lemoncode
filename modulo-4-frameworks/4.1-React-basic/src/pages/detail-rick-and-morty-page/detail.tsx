import { DetailComponentGeneral, routes } from "@/core";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CharacterEmpty, Characters } from "../rick-morty-list/api/rick-and-morty-mapper";
import { getCharactersID } from "./api/api";

export const DetailRickAndMortyPage: React.FC = () => {
  const { id } = useParams();
  const [charactersdetail, setCharactersDetail] = useState<Characters>(CharacterEmpty);

  useEffect(() => {
    getCharactersID(Number(id)).then((data) => {
      setCharactersDetail(data)
    });
  }, []);

  return (
    <DetailComponentGeneral>
      <h2>Hello from Detail page</h2>
      <div key={charactersdetail.id}>
        <img src={charactersdetail.image} alt={charactersdetail.name} />
        <p>name: {charactersdetail.name}</p>
        <p>gender: {charactersdetail.gender}</p>
        <p>species: {charactersdetail.species}</p>
        <p>status: {charactersdetail.status}</p>
      </div>

      <Link to={routes.rickMorty}>Back to list page</Link>
    </DetailComponentGeneral>
  );
};
