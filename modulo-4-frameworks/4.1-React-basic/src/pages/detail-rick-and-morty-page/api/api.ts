import { CharactersDetail } from "./rick-and-morty-mapper";

const API = "https://rickandmortyapi.com/api/character";

export const getCharactersID = async (id: number): Promise<CharactersDetail> => {
  const response = await fetch(`${API}/${id}`);
  const data = await response.json();
  return data;
};
