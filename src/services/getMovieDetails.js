import axios from 'axios';

export default async function getMovieDetails(movieId) {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTU5YmY3MWFiYzM0NzBmNDVkMDdjOGI1ZDNhODM5YiIsInN1YiI6IjY0ZGJhZWI2MDAxYmJkMDQxYWYzNDRmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QPxM_-Q55UeA1hwkxgY0DaHePNMMzHQ6--rME54wr20'
    }
  };

  try {
    const response = await axios(options)
    return response.data
  } catch (error) {
    console.error(error);
  }
}
