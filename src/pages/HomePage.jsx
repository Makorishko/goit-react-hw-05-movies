import { useEffect, useState } from 'react';
import { fetchTrendinsMovies } from '../components/api';
import Notiflix from 'notiflix';
import { MovieList } from '../components/MovieList';

export default function HomePage() {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    async function loadTrendingMovies() {
      try {
        const listOfMovies = await fetchTrendinsMovies();
        setMovieItems(listOfMovies);
      } catch (error) {
        Notiflix.Notify.failure(error.message);
      }
    }
    loadTrendingMovies();
  }, []);
    
    console.log(movieItems)

  return (
    <div>
      <h1>Trending today</h1>
          <MovieList movies={ movieItems} /> 
    </div>
  );
}
