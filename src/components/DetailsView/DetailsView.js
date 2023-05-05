import React, { useEffect} from "react";
import ReactDOM from "react-dom";
import { PokemonCard } from "../PokemonCard";
import { Details } from "../Details";
import { BackButton } from "../BackButton";
import "./DetailsView.css";

function DetailsView({pokemon, setSelectedPokemon}) {
    useEffect(() => {
        // Disable scrolling on mount
        document.body.style.overflow = "hidden";
        // Enable scrolling on unmount
        return () => (document.body.style.overflow = "auto");
    }, []);

    const handleBackClick = () => {
        setSelectedPokemon(-1);
    };

    return ReactDOM.createPortal(
        <div className="details-view-container">
            <BackButton onClick={handleBackClick}/>
            <PokemonCard pokemon={pokemon} />
            <Details pokemon={pokemon} />
        </div>,
        document.body
    );
}

export default DetailsView;
