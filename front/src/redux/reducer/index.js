import { ADD_FAV, REMOVE_FAV } from "../actions/types";

const initialState = {
  favorites: [],
};
// favorites -> [{id:1, name:Rick}]

export default function reducer(state = initialState, { type, payload }) {
  // action -> {type:"", payload}
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };

    case REMOVE_FAV:
      const filtered = state.favorites.filter((fav) => fav.id !== payload);
      return {
        ...state,
        favorites: filtered,
      };
    default:
      return {
        ...state,
      };
  }
}
