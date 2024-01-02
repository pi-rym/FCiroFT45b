import axios from "axios";
import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, RESET } from "./types";

//? Aca se ve la utilidad del middleware thunk, ya que, permite flujo async
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
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
    type: RESET,
  };
}
