import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { PokemonCard } from "../PokemonCard";
import { Details } from "../Details";
import { BackButton } from "../BackButton";
import "./DetailsView.css";

function DetailsView({ pokemon, setSelectedPokemon}) {
    const detailsViewRef = useRef(null);

    // useEffect(() => {
    //     // Disable scrolling on mount
    //     document.body.style.overflow = "hidden";
    //     // Enable scrolling on unmount
    //     return () => (document.body.style.overflow = "auto");
    // }, []);

    useEffect(() => {
        document.body.classList.add("no-scroll");
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, []);

    const handleBackClick = () => {
        detailsViewRef.current.classList.add("hidden");
        setTimeout(() => {
            setSelectedPokemon(-1);
        }, 500);
    };

    return ReactDOM.createPortal(
        <div className="details-view-container shown" ref={detailsViewRef}>
            <BackButton onClick={handleBackClick} />
            <PokemonCard pokemon={pokemon} />
            <Details pokemon={pokemon} />
        </div>,
        document.body
    );
}

export default DetailsView;
// import React, { Component, createRef } from 'react';
// import ReactDOM from 'react-dom';
// import BackButton from '../BackButton/BackButton';
// import { PokemonCard } from '../PokemonCard';
// import { Details } from '../Details';
// import './DetailsView.css';

// class DetailsView extends Component
// {
//     constructor( props )
//     {
//         super( props );
//         this.detailsViewRef = createRef( null );

//         this.handleBackClick = this.handleBackClick.bind( this );
//     }

//     // handle back button clicking
//     handleBackClick()
//     {
//         this.detailsViewRef.current.classList.add( 'hidden' );

//         setTimeout( () => {
//             this.props.setSelectedPokemon( -1 );
//         }, 500 );
//     }

//     render()
//     {
//         return ReactDOM.createPortal(
//             <div className="details-view-container shown" ref={ this.detailsViewRef }>

//                 <BackButton onClick={ this.handleBackClick } />
//                 <PokemonCard pokemon={ this.props.pokemon } />
//                 <Details pokemon={ this.props.pokemon } />

//             </div>, document.body
//         )
//     }
// }

// export default DetailsView;
