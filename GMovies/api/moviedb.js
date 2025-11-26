import axios from 'axios';
import { apiKey } from '../constants';


const apiBaseUrl = 'https://api.themoviedb.org/3/';
const trendingMoviesEndpoint = `${apiBaseUrl}trending/movie/day?language=pt-br&api_key=${apiKey}`;
const upcomingMoviesEndpoint = `${apiBaseUrl}movie/upcoming?language=pt-br&api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}movie/top_rated?language=pt-br&api_key=${apiKey}`;

const apicall = async (endpoint, params) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params? params: {}
  }

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('error: ', error);
    return {}
  }
}

export const image500 = path => path ? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = path => path ? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = path => path ? `https://image.tmdb.org/t/p/w185${path}` : null;

export const fetchTrendingMovies = () => {
  return apicall(trendingMoviesEndpoint);
}

export const fetchUpcomingMovies = () => {
  return apicall(upcomingMoviesEndpoint);
}

export const fetchTopRatedMovies = () => {
  return apicall(topRatedMoviesEndpoint);
}