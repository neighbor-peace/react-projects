import React from "react";
import logo from "../logo.svg";

export default function Navbar() {
    return (
        <nav>
            <img alt="react logo" className="nav--icon" src={logo} />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}