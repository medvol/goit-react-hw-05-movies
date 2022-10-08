import React from 'react';
import { useParams } from 'react-router-dom';
import useGetMovieReviews from 'components/services/useGetMovieReviews';
import { Loader } from 'components/Loader/Loader';
import { Box } from 'components/services/Box';
import posterBackground from '../../components/services/posterBackground.jpg';
import { Content, ImageWrapper, User, UpdateTime } from './Reviews.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const { reviews, loading, error } = useGetMovieReviews(movieId);

  return (
    <Box mt={5}>
      {' '}
      <ul>
        {reviews.length > 0 ? (
          reviews.map(
            ({
              id,
              updated_at,
              content,
              author_details: { username, avatar_path },
            }) => {
              const localDate = new Date(updated_at).toLocaleDateString();
              return (
                <Box mb={5} key={id}>
                  <Box display="flex" alignItems="center" mb={4}>
                    <ImageWrapper>
                      <img
                        src={
                          avatar_path?.includes('https')
                            ? avatar_path.slice(1)
                            : posterBackground
                        }
                        alt={username}
                      />
                    </ImageWrapper>
                    <User>{username}</User>
                    <UpdateTime>{localDate}</UpdateTime>
                  </Box>
                  <Content>{content}</Content>
                </Box>
              );
            }
          )
        ) : (
          <User>We do not find anything</User>
        )}
      </ul>
      {loading && <Loader />}
      {error && <p>Something went wrong</p>}
    </Box>
  );
}
