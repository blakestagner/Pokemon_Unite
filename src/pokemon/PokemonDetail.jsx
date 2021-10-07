import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { usePokemonProvider } from "../context/PokemonContext";
import PokemonBasic from "./PokemonBasic";
import Moves from "../components/Moves";
import Stats from "../components/stats/Stats";
import Ratings from "../components/ratings/Ratings";


export default function PokemonDetails() {
    const [loading, setLoading] = useState(true)

    const { roster, currentPokemon, setCurrentPokemon } = usePokemonProvider()
    const { handle } = useParams();
    const history = useHistory();

    useEffect(() => {
        if(handle && roster) {

            const pokemonInd = roster.findIndex(p => p.pokemonId === handle)
            return pokemonInd !== -1 ? 
                (setCurrentPokemon(roster[pokemonInd]), setLoading(false)) 
                : history.push(`/page-not-found/pokemon/${handle}`)
        }
    }, [ handle, roster, history])





    if(loading && !currentPokemon) return <p>Loading</p>
    
    return (
        <div
            className="p-details">
            
            <h1>{currentPokemon.pokemonId}</h1>
            <main 
                className="grid-50-50">
                <PokemonBasic p={currentPokemon} />
                <Ratings p={currentPokemon}/>
            </main>
            <Moves p={currentPokemon} />
        </div>
    )
}