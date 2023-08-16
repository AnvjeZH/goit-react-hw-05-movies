import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import MoviesDetails from 'pages/MoviesDetails/MoviesDetails';
import Cast from './Cast/Cast';
import Layout from './Layout/Layout';
import Reviews from './Reviews/Reviews';

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="movies" element={<div>Movies</div>} />
        <Route path='movies/:movieId' element={<MoviesDetails/>}>
          <Route path='cast' element={<Cast/>}/>
          <Route path='reviews' element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<Home />} />
        </Route>
      </Routes>
  );
};

export default App