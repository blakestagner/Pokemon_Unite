import { createContext, useState, useEffect, useContext } from "react";
import { pokemon } from "../pokemon/pokemon.json";

export const PokemonContext = createContext(null);
export const usePokemonProvider = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
  const [roster, setRoster] = useState(null);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  useEffect(() => {
    setRoster(pokemon);
  }, []);

  return (
    <PokemonContext.Provider
      value={{ roster, setRoster, currentPokemon, setCurrentPokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
