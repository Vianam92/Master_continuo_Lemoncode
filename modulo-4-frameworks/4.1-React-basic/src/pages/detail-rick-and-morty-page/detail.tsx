import { DetailComponentGeneral, routes } from "@/core";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCharactersID } from "./api/api";
import { CharacterEmpty, CharactersDetail } from "./api/rick-and-morty-mapper";

export const DetailRickAndMortyPage: React.FC = () => {
  const { id } = useParams();
  const [charactersdetail, setCharactersDetail] = useState<CharactersDetail>(CharacterEmpty);

  useEffect(() => {
    getCharactersID(Number(id)).then((data) => {
      setCharactersDetail(data)
      console.log(data)
    });
  }, []);

  return (
    <DetailComponentGeneral>
      <h2>Hello from Detail page</h2>
      <div key={charactersdetail.id}>
        <img src={charactersdetail.image} alt={charactersdetail.name} />
        <p>Name: {charactersdetail.name}</p>
        <p>Gender: {charactersdetail.gender}</p>
        <p>Especies: {charactersdetail.species}</p>
        <p>Status: {charactersdetail.status}</p>
        <p>Número de episodeos: <span>{charactersdetail.episode.length}</span></p>   
      </div>

      <Link to={routes.rickMorty}>Back to list page</Link>
    </DetailComponentGeneral>
  );
};
