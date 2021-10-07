import "./roster.css";
import PokemonBasic from "../pokemon/PokemonBasic.jsx";
import { usePokemonProvider } from "../context/PokemonContext";
import SelectPokemon from "../components/pokemonSort/SelectPokemon";
import { useSelectProvider } from "../context/SelectContext";

export default function Roster() {
  const { roster } = usePokemonProvider();
  const { roles, styles, difficulty, type } = useSelectProvider();

  const filterData = data => {
    let dataCopy = data;

    if (roles !== "all") {
      if (styles !== "all") {
        if (difficulty !== "all") {
          if (type !== "all") {
            dataCopy =
              dataCopy.role === roles &&
              dataCopy.style === styles &&
              dataCopy.difficulty === difficulty &&
              dataCopy.type === type;
          } else {
            dataCopy =
              dataCopy.role === roles &&
              dataCopy.style === styles &&
              dataCopy.difficulty === difficulty;
          }
        } else if (type !== "all") {
          dataCopy =
            dataCopy.role === roles &&
            dataCopy.style === styles &&
            dataCopy.type === type;
        } else {
          dataCopy = dataCopy.role === roles && dataCopy.style === styles;
        }
      } else if (difficulty !== "all") {
        if (type !== "all") {
          dataCopy =
            dataCopy.role === roles &&
            dataCopy.difficulty === difficulty &&
            dataCopy.type === type;
        } else {
          dataCopy =
            dataCopy.role === roles && dataCopy.difficulty === difficulty;
        }
      } else if (type !== "all") {
        dataCopy = dataCopy.role === roles && dataCopy.type === type;
      } else {
        dataCopy = dataCopy.role === roles;
      }
    } else if (styles !== "all") {
      if (difficulty !== "all") {
        if (type !== "all") {
          dataCopy =
            dataCopy.style === styles &&
            dataCopy.difficulty === difficulty &&
            dataCopy.type === type;
        } else {
          dataCopy =
            dataCopy.style === styles && dataCopy.difficulty === difficulty;
        }
      } else if (type !== "all") {
        dataCopy = dataCopy.style === styles && dataCopy.type === type;
      } else {
        dataCopy = dataCopy.style === styles;
      }
    } else if (difficulty !== "all") {
      if (type !== "all") {
        dataCopy = dataCopy.difficulty === difficulty && dataCopy.type === type;
      } else {
        dataCopy = dataCopy.difficulty === difficulty;
      }
    } else if (type !== "all") {
      dataCopy = dataCopy.type === type;
    }
    return dataCopy;
  };

  if (!roster) return <p>Loading</p>;

  return (
    <div className="roster">
      <h1>Roster</h1>
      <div>
        <SelectPokemon />
      </div>
      <div className="p-basic-grid">
        {roster
          .filter(p => filterData(p))
          .map(p => (
            <a key={p.pokemonId} href={`/pokemon/${p.pokemonId}`}>
              <PokemonBasic p={p} />
            </a>
          ))}
      </div>
    </div>
  );
}
