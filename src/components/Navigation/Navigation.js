import React from "react";
import NavigationLink from "./NavigationLink";
import "./Navigation.css";

function Navigation() {
    return (
        <div className="navigation-container">
            <h3 className="navigation-title">Select Generation:</h3>

            <div className="links-container">
                <NavigationLink exact to="/gen-i">I</NavigationLink>
                <NavigationLink exact to="/gen-ii">II</NavigationLink>
                <NavigationLink exact to="/gen-iii">III</NavigationLink>
                <NavigationLink exact to="/gen-iv">IV</NavigationLink>
                <NavigationLink exact to="/gen-v">V</NavigationLink>
                <NavigationLink exact to="/gen-vi">VI</NavigationLink>
                <NavigationLink exact to="/gen-vii">VII</NavigationLink>
                <NavigationLink exact to="/gen-viii">VIII</NavigationLink>
            </div>
        </div>
    );
}

export default Navigation;