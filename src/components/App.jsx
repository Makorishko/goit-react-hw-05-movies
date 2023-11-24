import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './Header-styled';
import { Suspense, lazy } from 'react';


const HomePage = lazy(() => import('pages/HomePage'));
const MoviePage = lazy(() => import('pages/MoviePage'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'))

const Link = styled(NavLink)`
  &.active {
    color: red;
  }
  padding-right: 10px;
`;

export const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movie</Link>
        </nav>
      </Header>

      <button onClick={() => navigate(-1)}>Go back</button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
