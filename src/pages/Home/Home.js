import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import { getTrendingMovies, getImagesConfig } from 'services/api';
import { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [imageConfig, setImageConfig] = useState({});
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        const img = await getImagesConfig();
        setImageConfig(img);
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTrendMovies();
  }, []);

  return (
    <>
      <TrendingMoviesList trendMovies={movies} image={imageConfig} />
    </>
  );
};

export default Home;
