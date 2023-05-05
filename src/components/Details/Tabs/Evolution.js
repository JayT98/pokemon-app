import React, { useState, useEffect } from "react";
import { fetchPokemonEvolutionChain } from "../../../api";

function Evolution({ pokemon }) {
    const [currentEvolution, setCurrentEvolution] = useState([]);
    const [evolutionChain, setEvolutionChain] = useState([]);

    // load evolution chain on mount
    useEffect(() => {
        fetchPokemonEvolutionChain(pokemon.id).then((data) => {
            setEvolutionChain([]);
            setCurrentEvolution(data.chain);
        });
    }, [pokemon]);

    useEffect(() => {
        getNextEvolution();
    }, [currentEvolution]);

    const getNextEvolution = () => {
        if (
            currentEvolution.length === 0 ||
            currentEvolution.evolves_to.length === 0
        ) {
            return null;
        }

        // extract useful data from evolution chain
        const current = currentEvolution.species.name;
        const next = currentEvolution.evolves_to[0].species.name;
        const level =
            currentEvolution.evolves_to[0].evolution_details[0].min_level;
        const currentId =
            currentEvolution.id || extractId(currentEvolution.species.url);
        const nextId = extractId(currentEvolution.evolves_to[0].species.url);

        // base URL for pokemon images
        const imageBaseURL =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

        // get Image URL
        const currentImage = `${imageBaseURL}${currentId}.svg`;
        const nextImage = `${imageBaseURL}${nextId}.svg`;

        // set current evolution to next evolution
        setCurrentEvolution((prev) => prev.evolves_to[0]);

        // push new evolution to array
        setEvolutionChain((prev) => [
            ...prev,
            {
                current,
                next,
                level,
                currentId,
                nextId,
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
                evolutionChain.map((e, i) => {
                    return (
                        <div className="evolution-container" key={i}>
                            <div className="evolution-container evolve-from">
                                <div className="image-container">
                                    <div className="bg-pokeball"></div>
                                    <img alt={e.current} src={e.currentImage} />
                                </div>

                                <span>{e.current}</span>
                            </div>

                            <div className="level-container">
                                <div className="arrow"></div>
                                Level {e.level}
                            </div>

                            <div className="evolution-container evolve-to">
                                <div className="image-container">
                                    <div className="bg-pokeball"></div>
                                    <img alt={e.next} src={e.nextImage} />
                                </div>

                                <span>{e.next}</span>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Evolution;
