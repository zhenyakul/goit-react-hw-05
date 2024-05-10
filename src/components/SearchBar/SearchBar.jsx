import css from "./SearchBar.module.css";

export default function SearchBar({
  onSubmit,
  setSearchParams,
  titleState,
  setTitleState,
}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const input = form[0].value;
    onSubmit(input);
    setSearchParams({ title: input });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          value={titleState}
          onChange={(evt) => {
            setTitleState(evt.target.value);
          }}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </div>
  );
}
