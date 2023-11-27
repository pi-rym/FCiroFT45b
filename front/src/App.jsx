import Card from "./components/card/Card";
import Cards from "./components/cards/Cards";
import SearchBar from "./components/searchBar/SearchBar";
import characters from "../utils/data";

function App() {
  return (
    <div className="App">
      <SearchBar
        onSearch={(characterID) =>
          window.alert("Emulamos que se esta haciendo una busqueda")
        }
      />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
