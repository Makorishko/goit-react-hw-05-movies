import axios from 'axios';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGI2NDgwNDc5YzAzZTc3NWUzMjVjYjYwMzE0ZWQzNyIsInN1YiI6IjY1NWQwZjMyZmQ0YTk2MDExZDdjZWQ0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h0NSH3GJLeS6PsHBeS_cxj_EQCA2z07_Csj8ebrIqNI',
  },
};

export const fetchTrendinsMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',

    options
  );
  return response.data.results;
};

export const fetchMoviesDetailsById = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,

    options
  );
  return response.data;
};

export const fetchMoviesByValue = async value => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=true&language=en-US&page=1`,

    options
  );
  return response.data.results;
};
export const fetchMoviesCastById = async id => {
  const response = await axios.get(
    `  https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,

    options
  );
  return response.data.cast;
};

export const fetchMoviesReviewsById = async id => {
  const response = await axios.get(
    `  https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,

    options
  );
  return response.data.results;
};
