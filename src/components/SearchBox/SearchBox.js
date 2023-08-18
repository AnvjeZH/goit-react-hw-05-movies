const SearchBox = ({ onSearch, onChange, query }) => {
  return (
    <form onSubmit={onSearch}>
      <input type="text" name="query" onChange={(e) => onChange(e.target.value)} value={query}/>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
