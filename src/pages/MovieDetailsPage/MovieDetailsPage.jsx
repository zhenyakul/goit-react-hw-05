import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMoviesById } from "../../api/moviesApi";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./MovieDetailsPage.module.css";

export default function MoviePage() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();
  const location = useLocation();
  const backToMoviesLink = location.state ?? "/movies";

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getMoviesById(params.movieId);
        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [params.movieId]);
  return (
    <div className={css.container}>
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      <Link to={backToMoviesLink}>Go back</Link>
      {movie && (
        <MovieDetails
          title={movie.title}
          image={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          overview={movie.overview}
        />
      )}
      <NavLink to="cast" state={backToMoviesLink}>
        Cast
      </NavLink>
      <NavLink to="reviews" state={backToMoviesLink}>
        Reviews
      </NavLink>

      <Outlet />
    </div>
  );
}
