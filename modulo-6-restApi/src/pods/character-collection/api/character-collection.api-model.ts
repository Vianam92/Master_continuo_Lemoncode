export interface CharacterEntityApi {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: Origin;
  created: string;
  bestSentences: string[];
}

interface Origin {
  name: string;
}