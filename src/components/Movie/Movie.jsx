import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'components/services/Box';


export default function Movie({movie }) {
    const { poster_path, title, vote_average, release_date, id } = movie;
    const imageURL = 'https://image.tmdb.org/t/p/w500'
  return (
      <Box displa>
          <Link to={`/movies/${id}`}>
              <img src={`${imageURL}${poster_path}`} alt={title} />
              <p>{title}</p>
              <p>{release_date}</p>
              <p>{vote_average}</p>
          </Link>
    </Box>
  )
}
