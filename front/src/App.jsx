import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";
const EMAIL = "f@f.com";
const PASSWORD = "hola123";

function App() {
  // Creacion de estados
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const URL = `https://rym2.up.railway.app/api/character`;
  const apiKey = "henrystaff";
  const onSearch = (input) => {
    const url = `${URL}/${input}?key=${apiKey}`;
    // url -> https://rym2.up.railway.app/api/character/2?key=henrystaff
    axios(url)
      .then(({ status, data }) => {
        if (status >= 200 && status < 400) {
          if (data.name) {
            // setCharacters([...characters, data])
            setCharacters((oldState) => [...oldState, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((error) => window.alert("Ocurrio un error"));
  };

  const onClose = (id) => {
    const filtered = characters.filter((character) => character.id !== id);
    setCharacters(filtered);
  };

  const login = ({ email, password }) => {
    /* if (email === EMAIL && password === PASSWORD) {
      setAccess(true);
    } */
    setAccess(true);
  };

  //* Si quieren que navegue a Home cuando se monte la app
  useEffect(() => {
    if (access) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [access]);
  return (
    <div className="App">
      {pathname !== "/login" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail">
          <Route
            index
            element={
              <div>
                <h1>DETAIL</h1>
              </div>
            }
          />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/login" element={<Form login={login} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
