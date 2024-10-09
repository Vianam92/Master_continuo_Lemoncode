import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { Input, Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Props {
  characterCollection: CharacterEntityVm[];
  detail: (id: string) => void;
  onEdit: (
    id: string,
    character: CharacterEntityVm,
    bestSentences: string[]
  ) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, detail, onEdit } = props;
  const [searchValue, setSearchValue] = React.useState('');
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 6;

  const pageCount = Math.ceil(characterCollection.length / itemsPerPage);

  const filterActors = () => {
    if (searchValue === '') {
      return characterCollection;
    } else {
      return characterCollection.filter((character) =>
        character.name.toLowerCase().includes(searchValue)
      );
    }
  };

  const paginatedCharacters = filterActors().slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value.toLowerCase());
  };

  return (
    <div className={classes.root}>
      {/*  <Button variant="contained" color="primary">
        Add character
      </Button> */}
      <Input
        type="text"
        name="search"
        placeholder="Busca por actor "
        onChange={handleSearchValue}
      />

      <ul className={classes.list}>
        {paginatedCharacters.map((character) => (
          <li key={character.id}>
            <CharacterCard
              character={character}
              detail={detail}
              onEdit={onEdit}
            />
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
