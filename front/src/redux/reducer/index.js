import { ADD_FAV, FILTER, REMOVE_FAV, ORDER, RESET } from "../actions/types";

const initialState = {
  allFavorites: [],
  favorites: [],
};
// allCharacters -> [{id:1}, {id:3}, {id:7}]
// favorites -> [{id:1}, {id:3}] -> [{id:1}]
// filtered -> favorites -> [{id:1}]

export default function reducer(state = initialState, { type, payload }) {
  // action -> {type:"", payload}
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        allFavorites: payload,
        favorites: payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        allFavorites: payload,
        favorites: payload,
      };
    case FILTER:
      if (payload === "All") return { ...state, favorites: state.allFavorites };

      const filterByGender = state.allFavorites.filter(
        (fav) => fav.gender === payload
      );
      return {
        ...state,
        favorites: filterByGender,
      };
    case ORDER:
      // payload -> Asc - Desc
      // [{id:3},{id:1}, {id:7}]
      //    a     b

      // Mutando -> devuelve un nuevo array
      /* const ordered = state.allFavorites.toSorted((a, b) =>
        payload === "Asc" ? a.id - b.id : b.id - a.id
      ); */
      // -> Trabaja sobre el mismo array
      const ordered = state.favorites.sort((a, b) => {
        switch (payload) {
          case "Asc":
            return a.id < b.id ? -1 : 1;
          case "Desc":
            return a.id > b.id ? -1 : 1;
          case "All":
            return a.id < b.id ? -1 : 1;
          default:
            return 0;
        }
      });
      return {
        ...state,
        favorites: ordered,
      };

    case RESET:
      return {
        ...state,
        favorites: state.allFavorites,
      };

    default:
      return {
        ...state,
      };
  }
}
