import { useState } from 'react';
import { useEffect } from 'react';

import { fetchTrendFilms } from 'service/api/fetchFilms';

import { TrendFilms } from 'components/TrendFilms/TrendFilms';

const Home = () => {
  const [films, setFilms] = useState(() => []);

  useEffect(() => {
    async function getTrendFilm() {
      try {
        const { data } = await fetchTrendFilms();
        setFilms(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getTrendFilm();
  }, []);

  return (
    <main>
      <TrendFilms films={films} />
    </main>
  );
};
export default Home;
