import { useEffect, useState } from 'react';
import { fetchMoviesCastById } from '../components/api';
import Notiflix from 'notiflix';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast-styled';

 const Cast = () => {
  const [castsList, setCastsList] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    async function loadCastsList() {
      try {
          const cast = await fetchMoviesCastById(movieId);
          console.log(cast, 'cast')

        setCastsList(cast);
      } catch (error) {
        Notiflix.Notify.failure(error.message);
      }
    }
    loadCastsList();
  }, [movieId]);

  console.log('casts', castsList.cast);

  return (
    <div>
      <CastList>
        {castsList.map(item => {
          const { name, character, profile_path } = item;
          return (
            <li>
              <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="Face" width="100px" height="150px"/>
              <p>{name}</p>
              <p>Character:{character}</p>
            </li>
          );
        })}
      </CastList>
    </div>
  );
};


export default Cast;