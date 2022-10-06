import React from 'react';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'components/services/api';
import { Loader } from 'components/Loader/Loader';


export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [isLoad, setIsLoad] = useState(false);
    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/movies';
    console.log('location on DetailsPage',location)
    console.log(from)
 
    useEffect(() => {
     const fetchMovies = async () => {
        
            try {
                setIsLoad(true);
                setError(null);
                const movie = await getMovieDetails(movieId);                
                setMovie(movie);
                
            } catch (error) {
                setError(error);
                
            }
            finally{setIsLoad(false)}
        }

        fetchMovies();
    }, [movieId])
   
    if (!movie) return;

    const castOnPage = location.pathname.includes('cast');
    const castLink = castOnPage ? `/movies/${movieId}` : `/movies/${movieId}/cast`;

     const reviewsOnPage = location.pathname.includes('reviews');
    const reviewsLink = reviewsOnPage ? `/movies/${movieId}` : `/movies/${movieId}/reviews`;
    
    // const handleGoBackButton = () => {
    //     navigate(from);
        
    // }
    
    const { poster_path, title, vote_average, release_date } = movie;
    const imageURL = 'https://image.tmdb.org/t/p/w500';

    return (
        <main>
            <button onClick={()=> navigate(from)}>Go back</button>
            {movie && <section>
                
                <div>
                    <img src={`${imageURL}${poster_path}`} alt={title} />
                    <p>{title}</p>
                    <p>{release_date}</p>
                    <p>{vote_average}</p>
                </div>
                <Link state={{from}}  to={castLink}>cast</Link>
                <Link state={{from}} to={reviewsLink}>reviews</Link>
                <Outlet/>
            </section>}
        {isLoad && <Loader/>}
        {error && <p>Something went wrong</p>}
    </main>
  )
}
