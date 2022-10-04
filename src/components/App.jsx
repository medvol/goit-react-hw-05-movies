import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Movies from 'pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<div>Home</div>} />
          <Route path='movies' element={<Movies/>} />
        </Route>        

      </Routes>
    </>
  );
};
