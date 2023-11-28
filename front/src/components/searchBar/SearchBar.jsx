import { useState } from "react";

export default function SearchBar({ onSearch }) {
  // props -> { onSearch: fn -> (input) => {sdfsdfsd} }
  // creacion de estados
  const [id, setId] = useState("");
  // creacndo funciones que manejan logica
  function handleChange(event) {
    // event -> {}
    const { value } = event.target;
    // value -> "2"
    // El value de un input es un string
    const input = Number(value); // NaN -> typeof NaN -> "number"
    // input -> 2
    if (isNaN(input)) throw new TypeError("Must be a number");
    else setId(value);
  }

  function handleClick() {
    onSearch(id);
  }

  return (
    <div>
      <input type="search" onChange={handleChange} />
      <button onClick={handleClick}>Agregar</button>
    </div>
  );
}
