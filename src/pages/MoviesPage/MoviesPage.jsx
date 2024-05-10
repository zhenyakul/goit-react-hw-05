import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getMoviesByQuery } from "../../api/moviesApi";
import { FilmsList } from "../../components/FilmsList/FilmsList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ title: "" });
  const title = searchParams.get("title");
  const [titleState, setTitleState] = useState(title);

  useEffect(() => {
    if (title == "") {
      return;
    }
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getMoviesByQuery(title);
        setMoviesList(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [title]);

  const onSubmit = async (input) => {
    try {
      setIsLoading(true);
      const data = await getMoviesByQuery(input);
      setMoviesList(data);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Movies Page</h1>
      <SearchBar
        onSubmit={onSubmit}
        setSearchParams={setSearchParams}
        titleState={titleState}
        setTitleState={setTitleState}
      />
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {moviesList.length > 0 && <FilmsList filmsList={moviesList} />}
    </div>
  );
}
