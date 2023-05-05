import React from "react";
import "./PokemonCard.css";

function PokemonCard({ pokemon: { name, id, sprites, types }, setSelectedPokemon }) {
    // get pokemon image from URL
    // const pokemonImage = sprites.other.dream_world.front_default || sprites.other['official-artwork'].front_default;
    const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other';
    const pokemonImage = `${baseURL}//dream-world/${id}.svg`;

    // add css class for each pokemon type
    const styleClass = types?.map((t) => "type-" + t.type.name).join(" ");

    // pad pokemon id with zeros
    const pokemonId = "#" + (id ? id.toString().padStart(3, "0"):"");

    // render pokemon card
    return (
        <div className="pokemonCard-container" onClick={()=>{
            setSelectedPokemon(id - 1);
        }}>
            <div className={`pokemonCard ${styleClass}`}>
                <div className="bg-pokeball"></div>
                <span className="pokemon-id">{pokemonId}</span>
                <div className="pokemonCard-title">
                    <h2>{name}</h2>

                    <div className="pokemon-types">
                        {types?.map((t,i) => {
                            return (
                                <span className="type" key={i}>
                                    {t.type.name}
                                </span>
                            );
                        })}
                    </div>
                </div>

                <div className="pokemon-image">
                    <img alt={name} src={pokemonImage} />
                </div>
            </div>
        </div>
    );
}
export default PokemonCard;
