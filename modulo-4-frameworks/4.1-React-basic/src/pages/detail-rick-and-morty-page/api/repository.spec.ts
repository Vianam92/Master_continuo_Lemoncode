import { rickAnMortyRepository } from "./repository";
import * as getCharactersID from "./api";
import { CharactersDetail } from "./rick-and-morty-mapper";

describe("repository test", () => {
  beforeEach(() => {
    jest.spyOn(getCharactersID, "getCharactersID").mockResolvedValue({
      id: 1,
      name: "rick",
      gender: "varón",
      species: "humano",
      status: "vivo",
      image: "http://image",
      episode: [],
    });
  });
  it("detail repository should call the API and data mapping ", async () => {
    const id = 1;

    const result = await rickAnMortyRepository(id);

    const detailRickAndMorty: CharactersDetail = {
      id: 1,
      name: "rick",
      gender: "varón",
      species: "humano",
      status: "vivo",
      image: "http://image",
      episode: [],
    };

    expect(result).toEqual(detailRickAndMorty);
  });
});
