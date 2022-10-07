import React from 'react';
import { useState, useRef, useCallback } from 'react';
import MovieList from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import useGetTrendingMovies from 'components/services/useGetTrendingMovies';

export default function Home() {
  const [pageNumber, setPageNumber] = useState(1);  

  const {
    movies,
    hasMore,
    loading,
    error
  } = useGetTrendingMovies(pageNumber);

  const observer = useRef();
  const lastMovieElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

    // const [movies, setMovies] = useState([])
    // const [error, setError] = useState(null);
    // const [isLoad, setIsLoad] = useState(false);

    // useEffect(() => {
    //  const fetchMovies = async () => {
    //         try {
    //             setIsLoad(true);
    //             setError(null);
    //             const movies = await getTrendingMovies();               
    //             setMovies(prev=> [...movies]);
                
    //         } catch (error) {
    //             setError(error);
                
    //         }
    //         finally{setIsLoad(false)}
    //     }

    //     fetchMovies();
    // }, [])
    



  return (
      <main>
         
                <MovieList lastElementRef={lastMovieElementRef} movies={movies} />
                {loading && <Loader />}
                {error && <p>Something went wrong</p>}
                
      </main>
  )
}
