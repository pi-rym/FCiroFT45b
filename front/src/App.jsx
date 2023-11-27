import Card from "./components/Card";
import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";
import characters, { Rick } from "../utils/data";

function App() {
  return (
    <div className="App">
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      <Cards characters={characters} />
      <Card
        id={Rick.id}
        name={Rick.name}
        status={Rick.status}
        species={Rick.species}
        gender={Rick.gender}
        origin={Rick.origin.name}
        image={Rick.image}
        onClose={() => window.alert("Emulamos que se cierra la card")}
      />
    </div>
  );
}

export default App;
