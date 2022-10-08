import React from 'react';
import { useParams } from 'react-router-dom';
import useGetMovieCredits from 'components/services/useGetMovieCredits';
import { Loader } from 'components/Loader/Loader';
import { Box } from 'components/services/Box';
import posterBackground from '../../components/services/posterBackground.jpg';
import { ActorTitle, Character } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const { actors, loading, error } = useGetMovieCredits(movieId);
  console.log(actors);

  const imageURL = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <Box
        as="ul"
        display="grid"
        gridTemplateColumns="repeat(6, 1fr)"
        gridColumnGap={4}
        gridRowGap={4}
        mt={5}
      >
        {actors &&
          actors.map(({ name, character, profile_path, id }) => {
            console.log(id);
            return (
              <li key={id.toString()}>
                <div>
                  {profile_path && (
                    <img src={`${imageURL}${profile_path}`} alt={name} />
                  )}
                  {!profile_path && <img src={posterBackground} alt={name} />}
                </div>
                <ActorTitle>{name}</ActorTitle>
                <Character>Character: {character}</Character>
              </li>
            );
          })}
      </Box>
      {loading && <Loader />}
      {error && <p>Something went wrong</p>}
    </>
  );
}
