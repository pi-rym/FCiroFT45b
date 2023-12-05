import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions/index";
export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  // props -> { id,name,status,species,gender,origin,image,onClose}
  // onClose -> () => window.alert("Emulamos que se cierra la card")
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    favorites.some((fav) => fav.id === id) && setIsFav(true);
  }, [favorites]);

  const handleClick = () => {
    onClose(id);
  };
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(
        addFav({
          id,
          name,
          status,
          species,
          gender,
          origin,
          image,
          onClose,
        })
      );
    }
  };
  return (
    <div id={id}>
      {!isFav && <button onClick={handleClick}>X</button>}
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <Link to={`/detail/${id}`}>
        <h2>Name: {name}</h2>
        <img src={image} alt="Not Found" />
      </Link>
      <h2>Specie: {species}</h2>
      {/* <h2>Status: {status}</h2>
      <h2>Gender: {gender}</h2>
      <h2>Origin: {origin.name}</h2> */}
    </div>
  );
}
