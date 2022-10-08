import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useGetMovieReviews(id) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  const KEY = 'f52cdaa08435027f7f78a039c7e2f3fc';

  useEffect(() => {
    setLoading(true);
    setError(null);
    let cancel;

    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US`,
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(response => {
        setReviews(prevReviews => {
          console.log(response);
          return [...prevReviews, ...response.data.results];
        });

        setLoading(false);
      })
      .catch(error => {
        if (axios.isCancel(error)) return;
        setError(error);
      })
      .finally(setLoading(false));
    return () => cancel();
  }, [id]);

  return { loading, error, reviews };
}
