export interface Characters {
  id: number;
  name: string;
  gender: string;
  species: string;
  status: string;
  episode: string;
  image: string;
}

export const rickAndMortyMapper = (characterList: Characters[]) =>
  characterList.map((character) => ({
    name: character.name,
    id: character.id,
    gender: character.gender,
    species: character.species,
    status: character.status,
    episode: character.episode,
    image: character.image,
  }));
