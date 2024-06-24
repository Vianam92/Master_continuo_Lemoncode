import { Characters, rickAndMortyMapper } from "./rick-and-morty-mapper";

const API = "https://rickandmortyapi.com/api/character";

export const getCharacters = async (): Promise<Characters[]> => {
  const response = await fetch(API);
  const data = await response.json();
  return data.results;
};

export const searchForCharacter = async (
  character: string
): Promise<Characters[]> => {
  const resp = await fetch(`${API}/?name=${character}`);
  const data = await resp.json();
  return data.results;
};
