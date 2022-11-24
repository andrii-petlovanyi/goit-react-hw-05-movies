import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCreditsFilm } from 'service/api/fetchFilms';

import { CastItem } from '../CastItem/CastItem';
import { Box } from '../Box';
import { CastList, CastTitle } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function getCast(id) {
      try {
        const { data } = await fetchCreditsFilm(id);
        setCasts(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getCast(id);
  }, [id]);

  return (
    <Box>
      {!casts.length > 0 ? (
        <CastTitle>No casts</CastTitle>
      ) : (
        <CastList>
          {casts.map(cast => (
            <CastItem key={cast.cast_id} cast={cast} />
          ))}
        </CastList>
      )}
    </Box>
  );
};

export default Cast;
