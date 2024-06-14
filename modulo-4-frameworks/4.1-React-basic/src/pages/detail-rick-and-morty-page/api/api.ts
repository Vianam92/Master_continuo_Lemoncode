import { Characters, rickAndMortyMapper } from "./rick-and-morty-mapper";

const API = "https://rickandmortyapi.com/api/character";

export const getCharactersID = async (id: number): Promise<Characters> => {
  const response = await fetch(`${API}/${id}`);
  const data = await response.json();
  return rickAndMortyMapper(data);
};
