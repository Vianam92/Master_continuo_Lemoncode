import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { LinkRouteDetail, linkRoutes } from 'core/router';
/* import { deleteCharacter } from './api'; */
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleDetail = (id: string) => {
    navigate(LinkRouteDetail.characterDetail(id));
  };
/* 
  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
    loadCharacterCollection();
  }; */

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCreateCharacter={handleCreateCharacter}
      detail={handleDetail}
/*       onDelete={handleDelete} */
    />
  );
};
