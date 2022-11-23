import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { TrendFilmItem } from 'components/TrendFilmItem/TrendFilmItem';
import { Links, List, ListItem } from './TrendFilms.styled';

export const TrendFilms = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies?.length > 0 && (
        <List>
          {movies.map(film => (
            <ListItem key={film.id}>
              <Links to={`/movie/${film.id}`} state={{ from: location }}>
                <TrendFilmItem film={film} />
              </Links>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

TrendFilms.propTypes = {
  movies: PropTypes.array,
};
