import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

import { fetchCreditsFilm } from 'service/api/fetchFilms';

import { CastItem } from '../CastItem/CastItem';
import { Box } from '../Box';

const Cast = () => {
  // const { id } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const { data } = await fetchCreditsFilm(436270);
        setCasts(data.cast);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, []);

  return (
    <Box>
      {!casts.length > 0 ? (
        <h1>No casts</h1>
      ) : (
        <ul>
          {casts.map(cast => (
            <CastItem key={cast.cast_id} cast={cast} />
          ))}
        </ul>
      )}
    </Box>
  );
};

export default Cast;
