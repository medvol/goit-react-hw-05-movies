import { useEffect, useState } from 'react';
import axios from 'axios';



export default function useSearchMovies(query, pageNumber) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    const KEY = 'f52cdaa08435027f7f78a039c7e2f3fc';

  useEffect(() => {
      setMovies([]);
  }, [query])

  useEffect(() => {
    if (!query) return;
      setLoading(true);
      setError(null);
    let cancel
    
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&include_adult=false`,
      params: { query: query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(response => {
      setMovies(prevMovies => {
        return [...prevMovies, ...response.data.results]
      })
      setHasMore(response.data.results.length > 0)
      setLoading(false)
    }).catch(error => {
      if (axios.isCancel(error)) return
      setError(error)
    }).finally(setLoading(false))
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, movies, hasMore }
}