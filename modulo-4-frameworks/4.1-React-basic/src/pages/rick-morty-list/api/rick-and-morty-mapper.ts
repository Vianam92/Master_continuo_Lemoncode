export interface Characters {
  id: number;
  name: string;
  gender: string;
  species: string;
  status: string;
  image: string;
}

export const CharacterEmpty: Characters = ({
  id: 1,
  name: "",
  gender: "",
  species: "",
  status: "",
  image: "",
})

export const rickAndMortyMapper = (characterList: Characters[]) =>
  characterList.map((character) => ({
    name: character.name,
    id: character.id,
    gender: character.gender,
    species: character.species,
    status: character.status,
    image: character.image,
  }));
