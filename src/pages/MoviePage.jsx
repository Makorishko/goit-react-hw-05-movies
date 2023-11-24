import { useEffect, useState } from 'react';
import { fetchMoviesByValue } from '../components/api';
import { MovieList } from '../components/MovieList';
import Notiflix from 'notiflix';

export default function MoviePage() {
  const [moviesList, setMoviesList] = useState([]);
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target[0].value;
    setMoviesList([]);
      setValue(value);
   
  };

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>

      <MovieList movies={ moviesList} /> 
    </div>
  );
}
