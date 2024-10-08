import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection, modifyCharacter } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);
  const [bestSentences, setBestSentences] = React.useState<string[]>([]);

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) =>{
      setCharacterCollection(mapToCollection(result, mapFromApiToVm))
    });
  };

  const modifyBestSentences = (id: string, character:CharacterEntityVm, bestSentences: string[]) => {
    setBestSentences(bestSentences);
    modifyCharacter(id, character, bestSentences);
  };

  return {
    characterCollection,
    loadCharacterCollection,
    modifyBestSentences,
    bestSentences,
  };
};
