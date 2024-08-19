import { CharacterEntityApi } from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const result = await response.json();
  return result.results;
};

/* export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
}; */
