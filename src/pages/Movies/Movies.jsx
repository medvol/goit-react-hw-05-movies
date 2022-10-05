import React from 'react';
import { Box } from 'components/services/Box';
import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList/MovieList';
import { searchMovies } from 'components/services/api';


export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoad, setIsLoad] = useState(false);



  useEffect(() => {
         if (!query) return
     const fetchMovies = async () => {
            try {
                setIsLoad(true);
                setError(null);
                const movies = await searchMovies(query);               
                setMovies(prev=> [...movies]);
                
            } catch (error) {
                setError(error)
                
            }
            finally{setIsLoad(false)}
        }

        fetchMovies();
     }, [query])
  
  const onChangeInput = (event) => {  
    setQuery(event.target.value.trim());    
  }


  return (
    <Box as='main' display='flex' flexDirection='column'>
      <Box as="header">
        <form>
         
          <input type='text' name="query" value={query} placeholder='search Movie' onChange={onChangeInput}/>
        
          <button type='submit'>Search</button>

        </form>
        
      </Box>
      <Box as='ul'>
        <MovieList movies={movies} />

      </Box>
    </Box>
  )
}
