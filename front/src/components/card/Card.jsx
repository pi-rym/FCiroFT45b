import { Link } from "react-router-dom";
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
  const handleClick = () => {
    onClose(id);
  };
  return (
    <div id={id}>
      <button onClick={handleClick}>X</button>
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
