import React from "react";
import "./PokemonCard.css";

function PokemonCard({pokemon: {name, id, sprites, types}})
{
    // get pokemon image
    const pokemonImage = sprites.other["official-artwork"].front_default;

    // add css class for each pokemon type
    const styleClass = types.map((t) => "type-" + t.type.name).join(" ");

    // pad pokemon id with zeros
    const pokemonId = '#' + id.toString().padStart(3, "0");
    
    // render pokemon card
    return (
        <div className="pokemonCard-container">
            <div className={`pokemonCard ${styleClass}`}>
                <div className="pokemonCard-title">
                    <h2>{name}</h2>

                    <div className="pokemon-types">
                        {
                            types.map((t, i) => {
                                return <span className="type" key={i}>{t.type.name}</span>
                            })
                        }
                    </div>
                </div>
                
                <img alt={name} src={pokemonImage} />

                <span className="pokemon-id">{pokemonId}</span>
            </div>
        </div>
    )
}
export default PokemonCard;