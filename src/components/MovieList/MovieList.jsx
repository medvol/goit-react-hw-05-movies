import React from 'react';
import Movie from 'components/Movie/Movie';
import { Box } from 'components/services/Box';
import { useLocation } from 'react-router-dom';

export default function MovieList({ movies, lastElementRef }) {
  const location = useLocation();

  return (
    <Box
      display="grid"
      as="ul"
      gridTemplateColumns="repeat(5, 1fr)"
      
      gridColumnGap={4}
      gridRowGap={4}
    >
      {movies.map((movie, index) => {
        if (movies.length === index + 1) {
          return (
            <Movie
              lastElementRef={lastElementRef}
              location={location}
              movie={movie}
              key={movie.id}
            />
          );
        } else {
          return <Movie location={location} movie={movie} key={movie.id} />;
        }
      })}
    </Box>
  );
}

