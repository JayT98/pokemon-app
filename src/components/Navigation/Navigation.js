import React from "react";
import NavigationLink from "./NavigationLink";
import "./Navigation.css";

function Navigation() {
    const  generation = [
        {
            link: "gen-i",
            text: "I",
            offset: 0,
            limit: 151
        },
        {
            link: "gen-ii",
            text: "II",
            offset: 151,
            limit: 100
        },
        {
            link: "gen-iii",
            text: "III",
            offset: 251,
            limit: 135
        },
        {
            link: "gen-iv",
            text: "IV",
            offset: 386,
            limit: 107
        },
        {
            link: "gen-v",
            text: "V",
            offset: 493,
            limit: 156
        },
        {
            link: "gen-vi",
            text: "VI",
            offset: 649,
            limit: 72
        },
        {
            link: "gen-vii",
            text: "VII",
            offset: 721,
            limit: 88
        },
        {
            link: "gen-viii",
            text: "VIII",
            offset: 809,
            limit: 89
        }
    ];
    return (
        <div className="navigation-container">
            <h3 className="navigation-title">Select Generation:</h3>

            <div className="links-container">
                {generation.map((gen, index) => {
                    return (
                        <NavigationLink exact to={`/${gen.link}`} key={index}>
                            {gen.text}
                        </NavigationLink>
                    );
                })}
            </div>
        </div>
    );
}

export default Navigation;