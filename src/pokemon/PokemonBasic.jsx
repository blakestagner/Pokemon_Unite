import './pokemon.css';
import Halftone from "../components/icon/Halftone";

export default function PokemonBasic({ p }) {
  const imgDir = `${process.env.PUBLIC_URL}/data/`;


  const UpperCase = (word) => {
    word = word.charAt(0).toUpperCase() + word.slice(1)
    if(word.includes("_")) {
      var splitWord = word.split("_")
      splitWord[1] = splitWord[1].charAt(0).toUpperCase() + splitWord[1].slice(1)
      word = splitWord.join().replace(",", " ")
    } return word
  }


  const BasicInfo = ({value}) => 
    <div className={`basic-info ${value}`}><p>{UpperCase(value)}</p></div>;


  return (
    <div 
      className="p-basic-card">
      <div
        className={`pokemon-card__background ${p.role}`}>
        <Halftone
          styles="pokemon" 
          color={p.role}/>
      </div>
      <img 
        className="p-basic-img"
        src={`${imgDir}${p.pokemonId}/${p.pokemonId}_fb.png`} 
        alt={`${p.pokemonId}` }/>
      <div
          className="p-info">
        <p className="p-name">{UpperCase(p.pokemonId)}</p>
        <div className="flex-row">
          <BasicInfo value={p.role}/>
          <BasicInfo value={p.style} />
        </div>
        <div className="flex-row">
          <BasicInfo value={p.difficulty}/>
          <BasicInfo value={p.type} />
        </div>
      </div>
    </div>
  );
}
