import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar/Avatar';
import IconButton from '@mui/material/IconButton/IconButton';
import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { RemoveRedEye, Save } from '@mui/icons-material';

interface Props {
  character: CharacterEntityVm;
  detail: (id: string) => void;
  onEdit: (
    id: string,
    character: CharacterEntityVm,
    bestSentences: string[]
  ) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, detail, onEdit } = props;
  const [isEdit, setIsEdit] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [sentences, setSentences] = React.useState([]);

  const handleChangeIsEdit = () => {
    setIsEdit(true);
  };

  const save = (id: string) => {
    setIsEdit(false);
    onEdit(id, character, sentences);
  };

  const handleGetSentence = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    setSentences([value]);
  };

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{character.status}</Avatar>}
        title={character.name}
        subheader={character.species}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.gender}
          </Typography>
          <div className={classes.list}>
            <CardActions>
              <p>bestSentences: </p>
              <IconButton
                onClick={() => {
                  isEdit ? save(character.id) : handleChangeIsEdit();
                }}
              >
                {isEdit ? <Save /> : <EditIcon />}
              </IconButton>
            </CardActions>

            <div>
              {isEdit ? (
                <input
                  type="text"
                  placeholder="Escribe una frase"
                  onChange={handleGetSentence}
                />
              ) : (
                ''
              )}
            </div>
            <ul>
              {character.bestSentences ? (
                <li>{character.bestSentences}</li>
              ) : (
                'No hay frases aún'
              )}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => detail(character.id)}>
          <RemoveRedEye />
        </IconButton>
      </CardActions>
    </Card>
  );
};
