import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { PokemonCard } from "../PokemonCard";
import { Details } from "../Details";
import "./DetailsView.css";

function DetailsView(pokemon) {
    useEffect(() => {
        // Disable scrolling on mount
        document.body.style.overflow = "hidden";
        // Enable scrolling on unmount
        return () => (document.body.style.overflow = "auto");
    }, []);

    return ReactDOM.createPortal(
        <div className="details-view-container">
            {/** TODO: Go back button */}
            <PokemonCard pokemon={pokemon} />
            <Details pokemon={pokemon} />
        </div>,
        document.body
    );
}

export default DetailsView;
