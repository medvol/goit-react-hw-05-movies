import React from 'react';
import Movie from 'components/Movie/Movie';
import { Box } from 'components/services/Box';
import { useLocation } from 'react-router-dom';

export default function MovieList({ movies, lastMovieElementRef }) {
  const location = useLocation();


  return (           
        <Box display='grid' as='ul' gridTemplateColumns='repeat(5, 1fr)' gridColumnGap={ 3} gridRowGap={3} >
      {movies.map((movie, index) => {
              if (movies.length === index + 1) {
          return (<li ref={lastMovieElementRef} key={movie.id}>
                       <Movie location={location} movie={movie}/>
                  </li>     )
        } else {
          return (<li  key={movie.id}>
                       <Movie location={location} movie={movie}/>
                  </li>     )
        }
         
          })}          
        </Box>       
  )
}


  //  return (        
  //                   <li key={movie.id}>
  //                     <Movie location={location} movie={movie}/>
  //                   </li>                              
  //            ) 