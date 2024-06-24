import { getCharacters, searchForCharacter } from "./api";
import { Characters, rickAndMortyMapper } from "./rick-and-morty-mapper";

export const rickAndMortyListRepository = async (): Promise<Characters[]> => {
  const data = await getCharacters();
  return rickAndMortyMapper(data);
};

export const rickAndMortySearchRepository = async (character: string) => {
  const data = await searchForCharacter(character);
  return rickAndMortyMapper(data);
};
