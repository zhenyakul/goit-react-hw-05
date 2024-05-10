import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/moviesApi";
import { FilmsList } from "../../components/FilmsList/FilmsList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [filmsList, setFilmsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getTrendingMovies();
        setFilmsList(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
      {error && <ErrorMessage />}
      {filmsList.length > 0 && <FilmsList filmsList={filmsList} />}
      {isLoading && <Loader />}
    </div>
  );
}
