import Nav from "./components/nav/Nav";
import Cards from "./components/cards/Cards";
import { useState } from "react";
import axios from "axios";

function App() {
  // Creacion de estados
  const [characters, setCharacters] = useState([]);
  const URL = `https://rym2.up.railway.app/api/character`;
  const apiKey = "henrystaff";
  // Insercion / creacion de funciones que permiten manipular la logica
  const onSearch = (input) => {
    // input es lo que escribe el usuario en la searchbar
    // supongamos que input es "2"
    const url = `${URL}/${input}?key=${apiKey}`;
    // url -> https://rym2.up.railway.app/api/character/2?key=henrystaff
    // setCharacters([...characters, { nuevoPersonaje }]);

    // agregando axios
    axios(url)
      .then(({ status, data }) => {
        // status es un codigo -> 200 por ejemplo
        // data es el objeto de respuesta del personaje
        if (status >= 200 && status < 400) {
          // Puede que el usuario busque un personaje con id "234234234" por ejemplo y aunque ese personaje no exista, el server no esta manejando esa situacion, por lo que nos devuelve un 200 tambien, asi que nosotros lo vamos a manejar
          if (data.name) {
            // setCharacters([...characters, data])
            setCharacters((oldState) => [...oldState, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((error) => window.alert("Ocurrio un error"));
    /* axios(
      `https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}`
    ).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    }); */
  };

  const onClose = (id) => {
    const filtered = characters.filter((character) => character.id !== id);
    setCharacters(filtered);
  };
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
