import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Movies from 'pages/Movies/Movies';
import Home from 'pages/Home/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />
         
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<div>Movie Details</div>}>
            <Route path='cast' element={<div>Cast</div>} />
            <Route path='reviews' element={<div>Reviews</div>} />
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Route>        

      </Routes>
    </>
  );
};
