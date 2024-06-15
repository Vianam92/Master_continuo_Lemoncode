export interface CharactersDetail {
  id: number;
  name: string;
  gender: string;
  species: string;
  status: string;
  image: string;
  episode: string[];
}

export const CharacterEmpty: CharactersDetail = ({
  id: 1,
  name: "",
  gender: "",
  species: "",
  status: "",
  image: "",
  episode: [],
})

export const rickAndMortyMapper = (character: CharactersDetail) =>
  ({
    name: character.name,
    id: character.id,
    gender: character.gender,
    species: character.species,
    status: character.status,
    image: character.image,
    episode: character.episode,
  });
