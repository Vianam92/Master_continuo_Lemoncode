import React from 'react';
import { Character } from './character-detail.vm';
import { Card, CardContent, CardMedia, List } from '@mui/material';
import * as classes from './character-detail.styles';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  const date = (date: string) => {
   const d = date.split("T")[0];
   return d;
  }

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%', width: '100%' }}
          />
          <p>{character.name}</p>
          <p>status: {character.status}</p>
          <p>species: {character.species}</p>
          <p>origin: {character.origin.name}</p>
          <p>created: {date(character.created)}</p>
        </CardContent>
      </Card>
    </div>
  );
};
