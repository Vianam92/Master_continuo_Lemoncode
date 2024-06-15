export interface Characters {
  id: number;
  name: string;
  image: string;
}

export const rickAndMortyMapper = (characterList: Characters[]) =>
  characterList.map((character) => ({
    name: character.name,
    id: character.id,
    image: character.image
  }));
