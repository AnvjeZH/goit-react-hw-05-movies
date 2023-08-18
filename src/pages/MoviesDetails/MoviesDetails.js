import { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails, getImagesConfig } from 'services/api';

const MoviesDetails = () => {
  const [movie, setMovie] = useState({});
  const [imageConfig, setImageConfig] = useState({});
  const { movieId } = useParams();
  const location = useLocation()
  const backLinkRef = useRef(location.state?.from || '/')

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const img = await getImagesConfig();
        setImageConfig(img);
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovieDetails();
  }, [movieId]);


  return (
    <>
    <Link to={backLinkRef.current}>Back</Link>
      {movie && (
        <>
          <img
            src={`${imageConfig.base_url}w500${movie.poster_path}`}
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
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MoviesDetails;
