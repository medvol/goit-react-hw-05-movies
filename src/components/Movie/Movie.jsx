import React from 'react';
import { Link } from 'react-router-dom';
import posterBackground from '../services/posterBackground.jpg';
import {
  Image,
  ReleaseDate,
  MovieDescription,
  ImageWrapper,
  Rating,
  MovieTitle,
  MovieItem,
} from './Movie.styled';

export default function Movie({ movie, location, lastElementRef }) {
  const { poster_path, title, vote_average, release_date, id } = movie;
  const imageURL = 'https://image.tmdb.org/t/p/w500';

  return (
    <MovieItem ref={lastElementRef}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <ImageWrapper>
          {poster_path && (
            <Image src={`${imageURL}${poster_path}`} alt={title} />
          )}
          {!poster_path && <Image src={posterBackground} alt={title} />}
        </ImageWrapper>

        <MovieDescription>
          <ReleaseDate>year: {release_date.slice(0, 4) || '-'}</ReleaseDate>
          <Rating>rating: {vote_average.toFixed(1) || '-'}</Rating>
          <MovieTitle>{title}</MovieTitle>
        </MovieDescription>
      </Link>
    </MovieItem>
  );
}
