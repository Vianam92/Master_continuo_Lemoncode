export interface Characters {
  id: number;
  name: string;
  gender: string;
  species: string;
  status: string;
  image: string;
  episode: string[];
}

export const rickAndMortyMapper = (character: Characters) =>
  ({
    name: character.name,
    id: character.id,
    gender: character.gender,
    species: character.species,
    status: character.status,
    image: character.image,
    episode: character.episode,
  });
