import React from 'react';
import { useParams } from 'react-router-dom';
import useGetMovieCredits from 'components/services/useGetMovieCredits';
import { Loader } from 'components/Loader/Loader';
import { Box } from 'components/services/Box';
import posterBackground from '../../components/services/posterBackground.jpg';

export default function Cast() {
  const { movieId } = useParams();
  const { actors, loading, error } = useGetMovieCredits(movieId);

  const imageURL = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <Box
        as="ul"
        display="grid"
        gridTemplateColumns="repeat(8, 1fr)"
        gridColumnGap={4}
        gridRowGap={4}
      >
        {actors.map(({ name, character, profile_path, id }) => {
          return (
            <li key={id.toString()}>
              <div>
                {profile_path && (
                  <img src={`${imageURL}${profile_path}`} alt={name} />
                )}
                {!profile_path && <img src={posterBackground} alt={name} />}
              </div>
              <p>{name}</p>
              <p>{character}</p>
            </li>
          );
        })}
      </Box>
      {loading && <Loader />}
      {error && <p>Something went wrong</p>}
    </>
  );
}
