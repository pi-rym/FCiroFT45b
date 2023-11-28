import SearchBar from "../searchBar/SearchBar";
export default function Nav({ onSearch}) {
    // propos -> { onSearch -> fn -> (input) => {sdfsd} }
  return (
    <div>
      <h1>Hola, soy el Nav 😄</h1>
      <SearchBar
        onSearch={onSearch}
      />
    </div>
  );
}
