import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { LinkRouteDetail, linkRoutes } from 'core/router';
/* import { deleteCharacter } from './api'; */
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { CharacterEntityVm } from './character-collection.vm';

export const CharacterCollectionContainer = () => {
  const {
    characterCollection,
    loadCharacterCollection,
    modifyBestSentences,
    bestSentences,
  } = useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, [bestSentences]);

  const handleDetail = (id: string) => {
    navigate(LinkRouteDetail.characterDetail(id));
  };

  const handleEditBestSentences = (id: string,character:CharacterEntityVm, bestSentences: string[]) => {
    modifyBestSentences(id, character, bestSentences);
  }
  /* 
  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
    loadCharacterCollection();
  }; */

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      detail={handleDetail}
      onEdit={handleEditBestSentences}
    />
  );
};
