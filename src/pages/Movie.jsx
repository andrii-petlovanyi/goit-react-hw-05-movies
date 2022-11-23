import { useState } from 'react';

import { TrendFilms } from 'components/TrendFilms/TrendFilms';
import SearchBar from 'components/SearchBar/SearchBar';

const Movie = () => {
  const [movies, setMovies] = useState(null);
  return (
    <section>
      <SearchBar setMovies={setMovies} />
      {movies && <TrendFilms movies={movies} />}
    </section>
  );
};

export default Movie;
