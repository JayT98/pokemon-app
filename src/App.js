import { useEffect, useState } from "react";
import { fetchPokemonData, fetchPokemons } from "./api";

import { Loader } from "./components/Loader";
import { PokemonView } from "./components/PokemonView";
import "./App.css";

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // load all pokemons on mount
    useEffect(() => {
        fillPokemonsArray();
    }, []);

    // fetch all pokemons and push to pokemons array
    const fillPokemonsArray = () => {
        // set loading state and rest pokemons array
        setIsLoading(true);
        setPokemons([]);

        //fetch first original 151 pokemons
        fetchPokemons(151).then(async ({ results }) => {
            //iterate over each pokemon and add to array
            await Promise.all(
                results.map(async(pokemon) => {
                    // fetch pokemon data
                    await fetchPokemonData(pokemon.name).then(async (json) => {
                        await setPokemons((prevState) => [...prevState, json]);
                    });
                })
            );
            setIsLoading(false);
        });
    };

    return (
        <div className="pokemon-app">
            <h1>Pokemon</h1>
            {isLoading ? <Loader /> : <PokemonView pokemons={pokemons} />}
        </div>
    );
}

export default App;
