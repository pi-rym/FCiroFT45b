import { useSelector } from "react-redux";
import Cards from "../cards/Cards";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  return <Cards characters={favorites} />;
}
