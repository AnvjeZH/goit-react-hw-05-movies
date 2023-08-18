import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/api';
import FoundMoviesList from 'components/FoundMoviesList/FoundMoviesList';
import SearchBox from 'components/SearchBox/SearchBox';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation()

  useEffect(() => {
    if (query === '') return;

    async function fetchQueryMovies(query) {
      try {
        setisLoading(true);
        const foundMovies = await getSearchMovie(query);
        setMovies(foundMovies);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setisLoading(false);
      }
    }
    fetchQueryMovies(query);
  }, [query]);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSearch = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputQuery = form.elements.query.value;
    if (inputQuery.trim() === '') {
      alert('Please enter a search query.');
      return;
    }
    if(inputQuery === query) return

    setSearchParams({ query: inputQuery });
  };



  return (
    <>
      <SearchBox onSearch={handleSearch} onChange={updateQueryString} query={query}/>

      {error && <div>Sorry, but we have errors. Try again</div>}

      {isLoading && <div>Wait...</div>}

      {query && (
        <>
          {filteredMovies.length > 0 ? (
            <FoundMoviesList movies={filteredMovies} location={location} />
          ) : (
            <div>No movies found with the your request.</div>
          )}
        </>
      )}
    </>
  );
};
export default Movies;


