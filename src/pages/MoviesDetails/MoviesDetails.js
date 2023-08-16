import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

const MoviesDetails = () => {
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await getMovieDetails(movieId);
        console.log(data.genres);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="300px"
            height="300px"
          />
          <h2>{movie.title}</h2>
          <p>User Score: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{movie.genres?.map(genre => genre.name).join(' ')}</p>
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link to='cast'>Cast</Link>
            </li>
            <li>
              <Link to='reviews'>Reviews</Link>
            </li>
          </ul>
          <Outlet/>
        </>
      )}
    </>
  );
};

export default MoviesDetails;
