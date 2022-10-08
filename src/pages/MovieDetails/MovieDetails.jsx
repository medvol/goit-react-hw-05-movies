import React from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'components/services/api';
import { Loader } from 'components/Loader/Loader';
import { Box } from 'components/services/Box';
import posterBackground from '../../components/services/posterBackground.jpg';
import {
  ImageWrapper,
  MovieLink,
  Image,
  MovieTitle,
  MovieOverview,
  GoBackButton,
} from './MovieDetails.styled';
import { IoChevronBackCircleSharp } from 'react-icons/io5';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/movies';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoad(true);
        setError(null);
        const movie = await getMovieDetails(movieId);
        setMovie(movie);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoad(false);
      }
    };

    fetchMovies();
  }, [movieId]);

  if (!movie) return;

  const castOnPage = location.pathname.includes('cast');
  const castLink = castOnPage
    ? `/movies/${movieId}`
    : `/movies/${movieId}/cast`;

  const reviewsOnPage = location.pathname.includes('reviews');
  const reviewsLink = reviewsOnPage
    ? `/movies/${movieId}`
    : `/movies/${movieId}/reviews`;

  const { poster_path, title, vote_average, release_date, overview } = movie;
  const imageURL = 'https://image.tmdb.org/t/p/w500';

  return (
    <Box as="main" p={5} pt={4} pr={8}>
      <GoBackButton onClick={() => navigate(from)}>
        <IoChevronBackCircleSharp size={18} />
        Go back
      </GoBackButton>
      {movie && (
        <section>
          <Box
            bg="secondary"
            display="flex"
            mt={5}
            mb={5}
            borderRadius={10}
            overflow="hidden"
          >
            <ImageWrapper>
              {poster_path && (
                <Image src={`${imageURL}${poster_path}`} alt={title} />
              )}
              {!poster_path && <Image src={posterBackground} alt={title} />}
            </ImageWrapper>
            <Box color="white" p={5} fontSize="m">
              <MovieTitle>Title: {title}</MovieTitle>
              <MovieTitle>
                Release year: {release_date.slice(0, 4) || '-'}
              </MovieTitle>
              <MovieTitle>Rating: {vote_average.toFixed(1) || '-'}</MovieTitle>
              <MovieOverview>{overview}</MovieOverview>
            </Box>
          </Box>
          <MovieLink state={{ from }} to={castLink}>
            Cast
          </MovieLink>
          <MovieLink state={{ from }} to={reviewsLink}>
            Reviews
          </MovieLink>
          <Outlet />
        </section>
      )}
      {isLoad && <Loader />}
      {error && <p>Something went wrong</p>}
    </Box>
  );
}
