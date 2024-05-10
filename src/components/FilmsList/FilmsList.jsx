import FilmsListItem from "../FilmsListItem/FilmsListItem";
import css from "./FilmList.module.css";

export function FilmsList({ filmsList }) {
  return (
    <ul className={css.list}>
      {filmsList.map((film) => {
        return (
          <li key={film.id} className={css.listItem}>
            <FilmsListItem title={film.original_title} id={film.id} />
          </li>
        );
      })}
    </ul>
  );
}
