import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { fetchMoviesDetailsById } from '../components/api';
import { DetailsContainer } from '../pages/MovieDetails-styled';
import { AdditionalContainer } from '../pages/MovieDetails-styled';
import { ListOfDetails } from '../pages/MovieDetails-styled';
import { ListOfGenres } from '../pages/MovieDetails-styled';
import { Outlet, Link, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    async function loadMovieDetails() {
      try {
        const details = await fetchMoviesDetailsById(movieId);
        setMovieDetails(details);
      } catch (error) {
        Notiflix.Notify.failure(error.message);
      }
    }
    loadMovieDetails();
  }, [movieId]);
  console.log(movieDetails);

  const { genres, title, overview, popularity, poster_path } = movieDetails;

  return (
    <div>
      <DetailsContainer>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="Poster"
          width="280px"
          height="400px"
        />
        <ListOfDetails>
          <h1> {title}</h1>
          <p>User score: {Math.round(popularity)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ListOfGenres>
            {genres?.map(item => (
              <li>{item.name}</li>
            ))}
          </ListOfGenres>
        </ListOfDetails>
      </DetailsContainer>

      <span>Additional information</span>
      <AdditionalContainer>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>

        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </AdditionalContainer>
      <Outlet />
    </div>
  );
}
