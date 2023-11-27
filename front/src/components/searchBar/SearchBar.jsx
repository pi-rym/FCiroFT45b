export default function SearchBar({ onSearch}) {
  // props -> { onSearch: (characterID) => window.alert(characterID)}
  return (
    <div>
      <input type='search' />
      <button onClick={onSearch}>Agregar</button>
    </div>
  );
}
