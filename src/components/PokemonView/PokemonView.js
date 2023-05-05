import React from 'react';
import './PokemonView.css';
import { PokemonCard } from '../PokemonCard';

function PokemonView({pokemons, setSelectedPokemon})
{
    return (
        <div className="pokemon-view">
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} 
                    setSelectedPokemon={setSelectedPokemon}
                />
            ))}
        </div>
    )
}

export default PokemonView;