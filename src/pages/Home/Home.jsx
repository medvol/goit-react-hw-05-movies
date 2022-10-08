import React from 'react';
import { useState, useRef, useCallback } from 'react';
import { Box } from 'components/services/Box';
import MovieList from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import useGetTrendingMovies from 'components/services/useGetTrendingMovies';
import { HomeTitle } from './Home.styled';

export default function Home() {
  const [pageNumber, setPageNumber] = useState(1);

  const { movies, hasMore, loading, error } = useGetTrendingMovies(pageNumber);

  const observer = useRef();
  const lastMovieElementRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );


  return (
    <Box as='main' p={4} pl={5}>
      <HomeTitle>Welcome to movie world!</HomeTitle>
      <MovieList lastElementRef={lastMovieElementRef} movies={movies} />
      {loading && <Loader />}
      {error && <p>Something went wrong</p>}
    </Box>
  );
}
