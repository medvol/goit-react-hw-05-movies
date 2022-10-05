import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = 'f52cdaa08435027f7f78a039c7e2f3fc';

export const getTrendingMovies = async () => {
    const response = await axios.get(`/trending/movie/week?api_key=${KEY}&page=1`);
    
    return response.data.results
    
}

export const searchMovies = async (query) => {
      const response = await axios.get(`/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
    
    return response.data.results
    
}

export const getMovieDetails = async (id) => {
    const response = await axios.get(`/movie/${id}?api_key=${KEY}&language=en-US`);
       
    return response.data
    
}

