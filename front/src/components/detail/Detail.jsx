import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  // const URL = `https://rym2.up.railway.app/api/character`;
  const URL = `http://localhost:3001/rickandmorty/character`;
  function onSearch() {
    const urlCharacter = `${URL}/${id}`;
    axios(urlCharacter)
      .then(({ status, data }) => {
        if (data.name) setCharacter(data);
        else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    onSearch();
  }, []);

  return (
    <div>
      <h1>Soy el Detail {id}</h1>
      {character.id && (
        <div>
          <h1>Name : {character.name}</h1>
          <img src={character.image} alt="Not Found" />
          <h1>Status : {character.status}</h1>
          <h1>Specie : {character.species}</h1>
          <h1>Gender: {character.gender}</h1>
          <h1>Origin : {character.origin?.name}</h1>
          <h1>Location : {character.location?.name}</h1>
        </div>
      )}
    </div>
  );
};
export default Detail;
