import { Character } from './character.api-model';

export const getCharacterDetail = async (id: number): Promise<Character> => {
  const response = await fetch(`http://127.0.0.1:3000/results/${id}`);
  const result = await response.json();
  return result;
};
;
