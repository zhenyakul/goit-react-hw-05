import { Link, useLocation } from "react-router-dom";
import css from "./FilmListItem.module.css";

export default function TrendingListItem({ title, id }) {
  const location = useLocation();
  return (
    <Link to={"/movies/" + id} state={location} className={css.link}>
      <h2>{title}</h2>
    </Link>
  );
}
