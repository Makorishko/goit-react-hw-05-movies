import { useEffect, useState } from 'react';
import { fetchMoviesReviewsById } from '../../components/api';
import Notiflix from 'notiflix';
import { useParams } from 'react-router-dom';
import { ReviewList } from './Reviews-styled';
import { Author } from './Reviews-styled';
import { Text } from './Reviews-styled';

const Reviews = () => {
  const [reviewText, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function loadReviews() {
      try {
        const review = await fetchMoviesReviewsById(movieId);
        setReviews(review);
      } catch (error) {
        Notiflix.Notify.failure(error.message);
      }
    }

    loadReviews();
  }, [movieId]);

  return (
    <div>
      {reviewText.length > 0 ? (
        <ReviewList>
          {' '}
          {reviewText.map(item => (
            <li>
              <Author>Author: {item.author}</Author>
              <Text>{item.content}</Text>
            </li>
          ))}
        </ReviewList>
      ) : (
        <span>We don't have any reviews </span>
      )}
    </div>
  );
};

export default Reviews;
