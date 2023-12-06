import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, RESET } from "./types";

export function addFav(character) {
  // character -> {name, genre}
  return {
    type: ADD_FAV,
    payload: character,
  };
}

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(order) {
  // order -> string -> Asc - Desc
  return {
    type: ORDER,
    payload: order,
  };
}


export function reset() { 
  return {
    type: RESET
  }
}
