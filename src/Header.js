export default function Header() {
  return (
    <header>
      <form className="search-form" id="search-form">
        <input
          type="search"
          placeholder="Enter a city..."
          autoComplete="on"
          autoFocus="on"
          id="search-input"
          className="search-form-input"
          required
        />
        <button className="search-form-button" type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
