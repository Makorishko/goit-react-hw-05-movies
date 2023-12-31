import { useEffect, useState } from 'react';
import { fetchMoviesByValue } from '../components/api';
import { MovieList } from '../components/MovieList';
import Notiflix from 'notiflix';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import { SearchForm } from '../components/SearchForm';

export default function MoviePage() {
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams] = useSearchParams('value');
  const value = searchParams.get('value') ?? '';
  const location = useLocation();

  useEffect(() => {
    async function loadOfMovies() {
      try {
        const listOfMovies = await fetchMoviesByValue(value);
        setMoviesList(listOfMovies);
      } catch (error) {
        Notiflix.Notify.failure(error.message);
      }
    }
    loadOfMovies();
  }, [value]);

  return (
    <div>
      <button>
        <Link to={location.state?.from || '/'}>Go back</Link>
      </button>
      <SearchForm />

      <MovieList movies={moviesList} />
    </div>
  );
}
