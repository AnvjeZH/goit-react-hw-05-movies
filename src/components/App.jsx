import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import MoviesDetails from 'pages/MoviesDetails/MoviesDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
import Layout from './Layout/Layout';



const Home = lazy(() => import('../pages/Home/Home'))
const Movies = lazy(() => import('../pages/Movies/Movies'))
const MoviesDetails = lazy(() => import('../pages/MoviesDetails/MoviesDetails'))
const Cast = lazy(() => import('../components/Cast/Cast'))
const Reviews = lazy(() => import('../components/Reviews/Reviews'))

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies/>} />
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