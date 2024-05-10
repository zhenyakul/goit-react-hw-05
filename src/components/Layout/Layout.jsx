import { Navigation } from "../Navigation/Navigation";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>
      {children}
      <footer className={css.footer}>footer</footer>
    </>
  );
}
