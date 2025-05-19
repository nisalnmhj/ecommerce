import { createContext, useContext, useReducer } from "react";

const FavoritesContext = createContext();

const initialState = [];

function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return state.find(item => item.id === action.payload.id)
        ? state
        : [...state, action.payload];
    case "REMOVE_FAVORITE":
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}

export function FavoritesProvider({ children }) {
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
