import { useEffect, useState } from "react";
import { getCast } from "../../api/moviesApi";
import { useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

export default function Cast() {
  const [casts, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getCast(params.movieId);
        setCast(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [params.movieId]);

  return (
    <ul>
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {casts.length > 0 &&
        casts.map((cast) => {
          return (
            <li key={cast.credit_id}>
              <h5>{cast.name}</h5>
            </li>
          );
        })}
    </ul>
  );
}
