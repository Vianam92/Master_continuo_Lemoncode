import React from 'react';
import { Character } from './character-detail.vm';
import { List } from '@mui/material';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <List>
      <p>{character.name}</p>
    </List>
  );
};
