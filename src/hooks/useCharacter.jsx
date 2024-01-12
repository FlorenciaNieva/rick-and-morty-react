import { useState } from "react";
import axios from "axios";

function useCharacter() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  function getAllCharacters() {
    axios("https://rickandmortyapi.com/api/character")
      .then(({ data }) => setInfo(data.results))
      .catch((error) => console.log(error));
  }

  function getOneCharacter(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        setTimeout(() => {
          setInfo(data);
          setLoading(false);
        }, 500);
      })
      .catch((error) => console.log(error));
  }

  function getCharactersFiltered(status) {
    axios(`https://rickandmortyapi.com/api/character?status=${status}`)
      .then(({ data }) => setInfo(data.results))
      .catch(error => console.log(error))
  }

  return {
    info,
    loading,
    getAllCharacters,
    getOneCharacter,
    getCharactersFiltered,
  };
}

export default useCharacter;
