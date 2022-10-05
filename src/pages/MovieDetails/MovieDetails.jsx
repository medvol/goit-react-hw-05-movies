import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieDetails } from 'components/services/api';
import Movie from 'components/Movie/Movie';

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [isLoad, setIsLoad] = useState(false);
    const { movieId } = useParams();

    
 
    useEffect(() => {
     const fetchMovies = async () => {
        
            try {
                setIsLoad(true);
                setError(null);
                const movie = await getMovieDetails(movieId);  
                console.log(movie);
                setMovie(movie)
                
            } catch (error) {
                setError(error)
                
            }
            finally{setIsLoad(false)}
        }

        fetchMovies();
    }, [movieId])
    
    console.log(movie)
    if(!movie) return null
    
    const { poster_path, title, vote_average, release_date } = movie;
    const imageURL = 'https://image.tmdb.org/t/p/w500'

  return (
      <ul>
           <div>
              <img src={`${imageURL}${poster_path}`} alt={title} />
              <p>{title}</p>
              <p>{release_date}</p>
              <p>{vote_average}</p>
          </div>
           <Link  to='cast'>cast</Link>
           <Link to='reviews'>reviews</Link>
          <Outlet/>
    </ul>
  )
}
