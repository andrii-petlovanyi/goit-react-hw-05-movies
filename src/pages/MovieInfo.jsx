import { Outlet, useParams, useLocation } from 'react-router-dom';
// import Spinner from 'components/Spinner/Spinner';
import { useState, useEffect, Suspense } from 'react';

import { contentURL, fetchInfoAboutFilm } from 'service/api/fetchFilms';

import {
  Wrapper,
  Image,
  Desc,
  TextWrap,
  Title,
  BackBtn,
  Container,
} from 'components/TrendFilms/MovieInfo.styled';
import { Btn, Linked } from 'components/Cast/Cast.styled';

const MovieInfo = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { id } = useParams();
  const [movies, setMovies] = useState('');
  useEffect(() => {
    // async function getFilm(id) {
    //   try {
    //     const { data } = await fetchInfoAboutFilm(id);
    //     setMovies(data.results);
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // getFilm(id);

    fetchInfoAboutFilm(id).then(resp => setMovies(resp.data));
  }, [id]);

  let imgUrl =
    movies.poster_path === null
      ? 'https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg'
      : contentURL + movies.poster_path;

  const { title, overview, genres, release_date, vote_average } = movies;

  return (
    <Container>
      <BackBtn to={backLinkHref}>Back</BackBtn>
      {movies && (
        <section>
          <Wrapper>
            <Image src={imgUrl} alt={title} />
            <Desc>
              <Title>{title}</Title>
              <p>{overview}</p>
            </Desc>
          </Wrapper>
          <Desc>
            <p>
              <TextWrap>Genres: </TextWrap>
              {genres.map(gen => gen.name).join(', ')}
            </p>
            <p>
              <TextWrap>Release Date:</TextWrap> {release_date}
            </p>
            <p>
              <TextWrap>Rating:</TextWrap> {vote_average.toFixed(1)}
            </p>
          </Desc>
          <Linked to="cast" state={{ from: backLinkHref }}>
            <Btn>CAST</Btn>
          </Linked>
          <Linked to="reviews" state={{ from: backLinkHref }}>
            <Btn>Reviews</Btn>
          </Linked>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </section>
      )}
    </Container>
  );
};
export default MovieInfo;
