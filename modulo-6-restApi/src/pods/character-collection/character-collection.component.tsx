import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  detail: (id: string) => void;
  onEdit: (id: string, character: CharacterEntityVm, bestSentences: string[]) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, detail, onEdit } = props;

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        Add character
      </Button>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} detail={detail} onEdit={onEdit}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
