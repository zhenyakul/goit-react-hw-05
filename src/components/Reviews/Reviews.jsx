import { useEffect, useState } from "react";
import { getReviews } from "../../api/moviesApi";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getReviews(params.movieId);
        setReviews(data);
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
      {reviews.length > 0 ? (
        reviews.map((review) => {
          return (
            <li key={review.id}>
              <h5>{review.author}</h5>
              <p>{review.content}</p>
            </li>
          );
        })
      ) : (
        <p>There are not reviews yet...</p>
      )}
    </ul>
  );
}
