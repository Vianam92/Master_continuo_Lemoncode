import { Character } from './character.api-model';

export const getCharacterDetail = async (id: number): Promise<Character> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const result = await response.json();
  return result;
};
;
