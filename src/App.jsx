import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from 'components/Layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const Movie = lazy(() => import('./pages/Movie'));
const MovieInfo = lazy(() => import('./pages/MovieInfo'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:id" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
