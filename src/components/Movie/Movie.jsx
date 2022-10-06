import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'components/services/Box';
import posterBackground from '../services/posterBackground.jpg'


export default function Movie({movie,location }) {
  const { poster_path, title, vote_average, release_date, id } = movie;
  const imageURL = 'https://image.tmdb.org/t/p/w500';
 
  return (
      <Box >
          <Link state= {{from:location}} to={`/movies/${id}`}>
        {poster_path && <img src={`${imageURL}${poster_path}`} alt={title} />}
        {!poster_path && <img src={posterBackground} alt={title} />}
              <p>{title}</p>
              <p>{release_date}</p>
              <p>{vote_average}</p>
          </Link>
    </Box>
  )
}
