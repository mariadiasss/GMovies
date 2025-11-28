import axios from 'axios';

// Configurações da API
const apiKey = '34e3069bee842fac7cfccb409e731c79'; // Substitua pela sua chave de API do TMDB
const baseUrl = 'https://api.themoviedb.org/3';

// Endpoints
const trendingMoviesEndpoint = `${baseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEndpoint = `${baseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${baseUrl}/movie/top_rated?api_key=${apiKey}`;

// Funções de requisição
const apiCall = async (endpoint, params) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params ? params : {}
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        return {};
    }
}

// Funções de exportação
export const fetchTrendingMovies = () => {
    return apiCall(trendingMoviesEndpoint);
}

export const fetchUpcomingMovies = () => {
    return apiCall(upcomingMoviesEndpoint);
}

export const fetchTopRatedMovies = () => {
    return apiCall(topRatedMoviesEndpoint);
}

// Endpoints de detalhes
const movieDetailsEndpoint = id => `${baseUrl}/movie/${id}?api_key=${apiKey}`;
const movieCreditsEndpoint = id => `${baseUrl}/movie/${id}/credits?api_key=${apiKey}`;
const personDetailsEndpoint = id => `${baseUrl}/person/${id}?api_key=${apiKey}`;
const personMoviesEndpoint = id => `${baseUrl}/person/${id}/movie_credits?api_key=${apiKey}`;
const searchMoviesEndpoint = `${baseUrl}/search/movie?api_key=${apiKey}`;

// Funções de exportação de detalhes
export const fetchMovieDetails = id => {
    return apiCall(movieDetailsEndpoint(id));
}

export const fetchMovieCredits = id => {
    return apiCall(movieCreditsEndpoint(id));
}

export const fetchPersonDetails = id => {
    return apiCall(personDetailsEndpoint(id));
}

export const fetchPersonMovies = id => {
    return apiCall(personMoviesEndpoint(id));
}

export const searchMovies = params => {
    return apiCall(searchMoviesEndpoint, params);
}

// Funções de imagem
export const image500 = posterPath => posterPath ? 'https://image.tmdb.org/t/p/w500' + posterPath : null;
export const image342 = posterPath => posterPath ? 'https://image.tmdb.org/t/p/w342' + posterPath : null;
export const image185 = posterPath => posterPath ? 'https://image.tmdb.org/t/p/w185' + posterPath : null;
