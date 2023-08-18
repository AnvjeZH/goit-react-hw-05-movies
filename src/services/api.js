import axios from 'axios';

const defaultOpts = {
  method: 'GET',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTU5YmY3MWFiYzM0NzBmNDVkMDdjOGI1ZDNhODM5YiIsInN1YiI6IjY0ZGJhZWI2MDAxYmJkMDQxYWYzNDRmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QPxM_-Q55UeA1hwkxgY0DaHePNMMzHQ6--rME54wr20',
  },
};

export async function getTrendingMovies() {
  const options = {
    ...defaultOpts, url: 'https://api.themoviedb.org/3/trending/movie/day'
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieDetails(movieId) {
  const options = {
    ...defaultOpts, url: `https://api.themoviedb.org/3/movie/${movieId}`,
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getImagesConfig() {
  const options = {
    ...defaultOpts, url: 'https://api.themoviedb.org/3/configuration',
  };

  try {
    const response = await axios(options);
    return response.data.images;
  } catch (error) {
    console.error(error);
  }
}

export async function getCredits(movieId) {
  const options = {
    ...defaultOpts, url: `https://api.themoviedb.org/3/movie/${movieId}}/credits`,
  }
  try {
    const response = await axios(options)
    return response.data.cast
  } catch (error) {
    console.error(error);
  }
}

export async function getReviews(movieId) {
const options = {
...defaultOpts, url: `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
};
try {
  const response = await axios(options);
  return response.data.results
} catch (error) {
  console.error(error);
}
}

export async function getSearchMovie(searchQuery) {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {query: searchQuery, include_adult: 'false', language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTU5YmY3MWFiYzM0NzBmNDVkMDdjOGI1ZDNhODM5YiIsInN1YiI6IjY0ZGJhZWI2MDAxYmJkMDQxYWYzNDRmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QPxM_-Q55UeA1hwkxgY0DaHePNMMzHQ6--rME54wr20'
    }
  };

  try {
    const response = await axios(options)
    return response.data.results
  } catch (error) {
    console.error(error);
  }
}
