export interface CharacterEntityVm {
  id: string;
  image: string;
  name: string;
  status: string;
  gender: string;
  species: string;
  origin: Origin;
  created: string;
  bestSentences: string[];
}

interface Origin {
  name: string;
}
