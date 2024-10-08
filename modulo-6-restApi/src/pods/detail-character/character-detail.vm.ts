export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
  origin: Origin;
  created: string;
}

interface Origin {
  name: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  status: '',
  species: '',
  origin: { name: '' },
  image: '',
  created: '',
});
