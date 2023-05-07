import React from "react";
import { NavLink } from "react-router-dom";

function NavigationLink(props) {
    return (
        <NavLink
            className="navigation-link"
            activeClassName="active"
            {...props}
        />
    );
}

export default NavigationLink;
