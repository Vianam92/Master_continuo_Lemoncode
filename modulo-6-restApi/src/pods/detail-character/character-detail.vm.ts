export interface Character {
  id: string;
  name: string;
  status: string;
  image: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  status: '',
  image: '',
});
