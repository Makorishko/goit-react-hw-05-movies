import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { fetchMoviesDetailsById } from '../../components/api';
import { DetailsContainer } from './MovieDetails-styled';
import { AdditionalContainer } from './MovieDetails-styled';
import { ListOfDetails } from './MovieDetails-styled';
import { ListOfGenres } from './MovieDetails-styled';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';

const defaultImage =
  'https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

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

  const { genres, title, overview, popularity, poster_path } = movieDetails;

  return (
    <div>
      <button>
        <Link to={location.state?.from || '/'}>Go back</Link>
      </button>
      <DetailsContainer>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultImage
          }
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
              <li key={item.id}>{item.name}</li>
            ))}
          </ListOfGenres>
        </ListOfDetails>
      </DetailsContainer>

      <span>Additional information</span>
      <AdditionalContainer>
        <li>
          <Link to={`cast`}>Cast</Link>
        </li>

        <li>
          <Link to={`reviews`}>Reviews</Link>
        </li>
      </AdditionalContainer>
      <Outlet />
    </div>
  );
}
