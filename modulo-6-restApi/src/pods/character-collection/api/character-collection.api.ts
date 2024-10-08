import { CharacterEntityVm } from '../character-collection.vm';
import { CharacterEntityApi } from './character-collection.api-model';

const api = 'http://127.0.0.1:3000/results';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const response = await fetch(api);
  const result = await response.json();
  return result;
};

export const modifyCharacter = async (
  id: string,
  character:CharacterEntityVm,
  bestSentences: string[]
): Promise<CharacterEntityApi[]> => {
  try {
    if (id) {
      const response = await fetch(`${api}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...character, bestSentences: bestSentences}),
      });
      const result = response.json();
      return result;
    }
  } catch (err) {
    throw new Error('Error en la solicitud');
  }
};

/* export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
}; */
