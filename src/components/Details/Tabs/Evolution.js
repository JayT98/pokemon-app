import React, { useState, useEffect } from "react";
import { fetchPokemonEvolutionsChain } from "../../../api";

function Evolution({ pokemon }) {
    const [currentEvolutions, setCurrentEvolutions] = useState([]);
    const [evolutionChain, setEvolutionChain] = useState([]);

    // load evolution chain on mount
    useEffect(() => {
        fetchPokemonEvolutionsChain(
            pokemon.id.then((data) => {
                setCurrentEvolutions([]);
                setEvolutionChain(data.chain);
            })
        );
    }, [pokemon]);

    useEffect(() => {
        getNextEvolutions();
    });

    const getNextEvolutions = () => {
        if (
            currentEvolutions.length === 0 ||
            currentEvolutions.evolves_to.length === 0
        ) {
            return null;
        }

        // extract useful data from evolution chain
        const current = currentEvolutions.species.name;
        const next = currentEvolutions.evolves_to[0].species.name;
        const level =
            currentEvolutions.evolves_to[0].evolution_details[0].min_level;
        const currentId =
            currentEvolutions.id || extractId(currentEvolutions.species.url);
        const nextId = extractId(currentEvolutions.evolves_to[0].species.url);

        // base URL for pokemon images
        const imageBaseURL =
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other';

        // get Image URL
        const currentImage = `${imageBaseURL}${currentId}.svg`;
        const nextImage = `${imageBaseURL}${nextId}.svg`;

        // set current evolution to next evolution
        setCurrentEvolutions(currentEvolutions.evolves_to[0]);

        // pus new evolution to array
        setEvolutionChain((prevState) => [
            ...prevState,
            {
                current,
                next,
                level,
                currentImage,
                nextImage,
            },
        ]);
    };

    // extract pokemon id from url
    const extractId = (url) => {
        return url.match(/\/(\d+)\//)[1];
    };

    return (
        <div className="tab tab-evolution">
            <h2>Evolution</h2>
            {evolutionChain.length === 0 && (
                <div>This pokemon does not evolve.</div>
            )}

            {
                // iterate over evolution chain and display each evolution
                evolutionChain.map((evolution, index) => {
                    return (
                        <div className="evolution-container" key={index}>
                            <div className="evolution-container evole-from">
                                <div className="image-container">
                                    <div className="bg-pokeball"></div>
                                    <img
                                        alt={evolution.current}
                                        src={evolution.currentImage}
                                    />
                                </div>

                                <span>{evolution.current}</span>
                            </div>

                            <div className="level-container">
                                <div className="arrow"></div>
                                Level {evolution.level}
                            </div>

                            <div className="evolution-container evole-to">
                                <div className="image-container">
                                    <div className="bg-pokeball"></div>
                                    <img
                                        alt={evolution.next}
                                        src={evolution.nextImage}
                                    />
                                </div>

                                <span>{evolution.next}</span>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}


export default Evolution;