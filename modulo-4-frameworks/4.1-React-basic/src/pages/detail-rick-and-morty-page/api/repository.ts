import { getCharactersID } from "./api"
import { CharactersDetail, rickAndMortyMapper } from "./rick-and-morty-mapper";

export const rickAnMortyRepository = async(id: number): Promise<CharactersDetail> => {
   const response = await getCharactersID(id);
   return rickAndMortyMapper(response);
}