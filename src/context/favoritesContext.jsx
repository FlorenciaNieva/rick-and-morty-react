import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoritesContext = createContext()

const FavoritesContextProvider = ({children}) => {
  const [allFavorites, setAllFavorites] = useState([]);

  const [getItem, saveItem] = useLocalStorage("favorites");

  useEffect(() => {
    setAllFavorites(getItem());
    }, [])

  function addFavorite(character) {
    saveItem([...allFavorites, character]);
    setAllFavorites([...allFavorites, character]);
  }

  function removeFavorite(idCharacter) {
    saveItem(allFavorites.filter((character) => character.id !== idCharacter));
    setAllFavorites(allFavorites.filter((character) => character.id !== idCharacter));
  }

  function isFavorite(idCharacter) {
    return allFavorites.some((character) => character.id === idCharacter);
  }

  const data = {
    allFavorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  }

  return (
  <FavoritesContext.Provider value={data}>
    {children}
  </FavoritesContext.Provider>
  )
}
export default FavoritesContextProvider;