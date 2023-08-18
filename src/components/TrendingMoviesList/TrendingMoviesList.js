import { Link } from 'react-router-dom';

export default function TrendingMoviesList({ trendMovies, image }) {
  return (
    <>
      <h1>Trending today</h1>

      {trendMovies.map(({ id, title, poster_path }) => {
        const imageUrl = `${image.base_url}w500${poster_path}`;
        return (
          <Link key={id} to={`movies/${id}`}>
            <p>{title}</p>
            <img src={imageUrl} alt={title} width="300px" height="300px" />
          </Link>
        );
      })}
    </>
  );
}
