import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjBiZDBjOTYzNTUxOTRjMjQ3ZTk3MDE3NmVmY2JlYyIsInN1YiI6IjY1ZTcyZGJiMDk3YzQ5MDE2ZDY2MmRkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eh_UhAim8lkuLrWNvOIC62rheAIi-BTOakmmlY74Of0",
  },
};

export async function getTrendingMovies() {
  const response = await axios.get(
    "/3/trending/movie/day?language=en-US",
    options
  );
  return response.data.results;
}

export async function getMoviesByQuery(currentQuery) {
  const response = await axios.get(
    `/3/search/movie?query=${currentQuery}`,
    options
  );
  return response.data.results;
}

export async function getMoviesById(movieId) {
  const response = await axios.get(`/3/movie/${movieId}`, options);
  return response.data;
}

export async function getCast(movieId) {
  const response = await axios.get(`/3/movie/${movieId}/credits`, options);
  return response.data.cast;
}

export async function getReviews(movieId) {
  const response = await axios.get(`/3/movie/${movieId}/reviews`, options);
  return response.data.results;
}
