import PropTypes from 'prop-types';

import { contentURL } from 'service/api/fetchFilms';
import { ListItem, PhotoAct } from './CastItem.styled';

export const CastItem = ({ cast = {} }) => {
  const { character, name, profile_path } = cast;
  return (
    <>
      <ListItem>
        <PhotoAct
          src={
            profile_path
              ? contentURL + profile_path
              : 'https://dummyimage.com/200x300/8c898c/ffffff.jpg&text=Photo+not+available'
          }
          alt={`photo ${name}`}
        />
        <p>{name}</p>
        <p>{character}</p>
      </ListItem>
    </>
  );
};

CastItem.propTypes = {
  cast: PropTypes.shape({
    character: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }),
};
