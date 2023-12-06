import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards, reset } from "../../redux/actions";
import Cards from "../cards/Cards";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "order") {
      setAux(!aux);
      dispatch(orderCards(value));
    } else if (name === "filter") {
      dispatch(filterCards(value));
    }
  };

  const handleClick = () => {
    dispatch(reset())
  };

  return (
    <div>
      <select name="order" id="order" onChange={handleChange}>
        <option value="All">All</option>
        <option value="Asc">Ascendente</option>
        <option value="Desc">Descendente</option>
      </select>
      <select name="filter" id="filter" onChange={handleChange}>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <button onClick={handleClick}>Reset</button>
      <Cards characters={favorites} />
    </div>
  );
}
