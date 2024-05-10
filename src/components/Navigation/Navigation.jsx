import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

export function Navigation() {
  const BuildLinkStyles = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink);
  };

  return (
    <nav className={css.navContainer}>
      <ul className={css.list}>
        <li>
          <NavLink to="/" className={BuildLinkStyles}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={BuildLinkStyles}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
