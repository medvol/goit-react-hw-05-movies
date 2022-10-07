import React, { useState, useRef, useCallback } from 'react';
import { Box } from 'components/services/Box';
import MovieList from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import useSearchMovies from 'components/services/useSearchMovies';

export default function Movies() {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const { movies, hasMore, loading, error } = useSearchMovies(
    query,
    pageNumber
  );

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

  const onChangeInput = ({ target }) => {
    const query = target.value.trim();
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    setPageNumber(1);
  };

  return (
    <Box as="main" display="flex" flexDirection="column">
      <Box as="header">
        <form>
          <input
            type="text"
            name="query"
            value={query}
            placeholder="Search for Movies"
            onChange={onChangeInput}
          />
          <button type="submit">Search</button>
        </form>
      </Box>
      <Box as="section">
        {movies && (
          <MovieList lastElementRef={lastMovieElementRef} movies={movies} />
        )}
        {loading && <Loader />}
        {error && <p>Something went wrong</p>}
      </Box>
    </Box>
  );
}
