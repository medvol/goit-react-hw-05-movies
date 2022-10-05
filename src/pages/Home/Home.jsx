import React from 'react';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'components/services/api';
import MovieList from 'components/MovieList/MovieList';

export default function Home() {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null);
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
     const fetchMovies = async () => {
            try {
                setIsLoad(true);
                setError(null);
                const movies = await getTrendingMovies();               
                setMovies(prev=> [...movies]);
                
            } catch (error) {
                setError(error)
                
            }
            finally{setIsLoad(false)}
        }

        fetchMovies();
    }, [])
    



  return (
      <>
          <MovieList movies={movies } />
      </>
  )
}
