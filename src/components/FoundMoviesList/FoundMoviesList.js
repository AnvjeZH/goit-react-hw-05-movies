import { Link } from 'react-router-dom';

const FoundMoviesList = ({ movies, location,  }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <Link key={id} to={`${id}`} state={{from: location}}>
          <li>{title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default FoundMoviesList;
