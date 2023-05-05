import React, { useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import { PokemonCard } from "../PokemonCard";
import { Details } from "../Details";
import { BackButton } from "../BackButton";
import "./DetailsView.css";

function DetailsView({pokemon, props}) {
    const detailsViewRef = useRef(null);
    useEffect(() => {
        // Disable scrolling on mount
        document.body.style.overflow = "hidden";
        // Enable scrolling on unmount
        return () => (document.body.style.overflow = "auto");
    }, []);

    const handleBackClick = () => {
        detailsViewRef.current.classList.add("hidden");
        setTimeout(() => {
            props.setSelectedPokemon( -1 );
        }, 500);
    };

    return ReactDOM.createPortal(
        <div className="details-view-container shown" ref={detailsViewRef}>
            <BackButton onClick={handleBackClick}/>
            <PokemonCard pokemon={pokemon} />
            <Details pokemon={pokemon} />
        </div>,
        document.body
    );
}

export default DetailsView;
