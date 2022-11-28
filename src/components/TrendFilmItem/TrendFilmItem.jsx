import PropTypes from 'prop-types';

import { contentURL } from 'service/api/fetchFilms';
import { FilmPoster, FilmTitle, Rating } from './TrendFilmItem.styled';

export const TrendFilmItem = ({ film }) => {
  const { title, vote_average, poster_path } = film;
  return (
    <>
      <FilmPoster
        src={
          poster_path
            ? contentURL + poster_path
            : 'https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg'
        }
        alt={title}
      />
      <FilmTitle>{title}</FilmTitle>
      {vote_average && <Rating>{vote_average.toFixed(1)}</Rating>}
    </>
  );
};

TrendFilmItem.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }),
}.isRequired;
