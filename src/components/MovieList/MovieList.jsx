import React from 'react';
import Movie from 'components/Movie/Movie';
import { Box } from 'components/services/Box';

export default function MovieList({ movies }) {
    
    console.log(movies)



    return (
        <Box display='grid' gridTemplateColumns='repeat(5, 1fr)' gridColumnGap={ 3} gridRowGap={3} >
          {movies.map((movie) => {
             return (
          <li key={movie.id}>
                  <Movie movie={movie}/>
              </li>
             ) 
          })}
          
    </Box>
  )
}
