import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Props {
  characterCollection: CharacterEntityVm[];
  detail: (id: string) => void;
  onEdit: (id: string, character: CharacterEntityVm, bestSentences: string[]) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, detail, onEdit } = props;
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 6;

  const pageCount = Math.ceil(characterCollection.length / itemsPerPage);

  const paginatedCharacters = characterCollection.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        Add character
      </Button>

      <ul className={classes.list}>
        {paginatedCharacters.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} detail={detail} onEdit={onEdit}/>
          </li>
        ))}
      </ul>
      <Pagination
        count={pageCount}
        onChange={handlePageChange}
        renderItem={(character) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...character}
          />
        )}
      />
    </div>
  );
};
