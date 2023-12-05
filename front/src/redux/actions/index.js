import { ADD_FAV, REMOVE_FAV } from "./types";

export function addFav(character) {
  // character -> {name, genre}
  return {
    type: ADD_FAV,
    payload: character
  };
}

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id
  };
};