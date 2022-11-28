import { Outlet, useParams, useLocation } from 'react-router-dom';
// import Loader from 'components/Loader/Loader';
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
  WrapperBtn,
  WrapperOutlet,
  IconBack,
} from 'components/TrendFilms/MovieInfo.styled';
import { Btn, Linked } from 'components/Cast/Cast.styled';

const MovieInfo = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { id } = useParams();
  const [movies, setMovies] = useState('');

  useEffect(() => {
    async function getFilm(id) {
      try {
        const { data } = await fetchInfoAboutFilm(id);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }
    getFilm(id);
  }, [id]);

  const { title, overview, genres, release_date, vote_average, poster_path } =
    movies;

  return (
    <Container>
      <BackBtn to={backLinkHref}>
        <IconBack />
      </BackBtn>
      {movies && (
        <section>
          <Wrapper>
            <Image
              src={
                poster_path
                  ? contentURL + poster_path
                  : 'https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg'
              }
              alt={title}
            />
            <Desc>
              <Title>{title}</Title>
              <p>{overview}</p>

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
          </Wrapper>
          <WrapperBtn>
            <Linked to="cast" state={{ from: backLinkHref }}>
              <Btn>Cast</Btn>
            </Linked>
            <Linked to="reviews" state={{ from: backLinkHref }}>
              <Btn>Reviews</Btn>
            </Linked>
          </WrapperBtn>
          <WrapperOutlet>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </WrapperOutlet>
        </section>
      )}
    </Container>
  );
};
export default MovieInfo;
