import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies, getImagesConfig } from 'services/api';

export default function TrendingMoviesList() {
    const [movies, setMovies] = useState([]);
    const [imageConfig, setImageConfig] = useState({})
    // const [error, setError] = useState(false);
    // const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      async function fetchTrendMovies() {
        try {
          const img = await getImagesConfig()
          setImageConfig(img)
          const { results } = await getTrendingMovies();
          setMovies(results);
        } catch (error) {
          console.error(error)
        }
      }
      fetchTrendMovies();
    }, []);

    return (
        movies.map(({ id, title, poster_path}) => {
          const imageUrl = `${imageConfig.base_url}w500${poster_path}`
          return (
          <Link key={id} to={`movies/${id}`}>
            <p>{title}</p>
            <img  src={imageUrl} alt={title} width='300px' height='300px'/>
          </Link>
        )})
  )
        }
