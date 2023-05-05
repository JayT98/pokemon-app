import { useEffect, useState } from "react";
import { fetchPokemonData, fetchPokemons } from "./api";

import { Loader } from "./components/Loader";
import { PokemonView } from "./components/PokemonView";
import { DetailsView } from "./components/DetailsView";
import "./App.css";

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(-1);

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
            //iterate over each pokemon and add to array (Promise only working with results.map)
            await Promise.all(
                results.map(async (pokemon, i) => {
                    // fetch pokemon data
                    await fetchPokemonData(pokemon.name).then(async (json) => {
                        // await setPokemons((prevState) => [
                        //     ...prevState,
                        //     i,
                        //     json,
                        // ]);
                        await setPokemons((prevState) => {
                            let tmp = prevState.slice();
                            tmp[i] = json;
                            return tmp;
                        });
                    });
                })
            );
            setIsLoading(false);
        });
    };

    return (
        <div className="pokemon-app">
            <h1>Pokemon</h1>
            {
                // if a pokemon is selected, show details view
                selectedPokemon !== -1 && (
                    <DetailsView
                        pokemon={pokemons[selectedPokemon]}
                        setSelectedPokemon={setSelectedPokemon}
                    />
                )
            }
            {isLoading ? (
                <Loader />
            ) : (
                <PokemonView
                    pokemons={pokemons}
                    setSelectedPokemon={setSelectedPokemon}
                />
            )}
        </div>
    );
}

export default App;
