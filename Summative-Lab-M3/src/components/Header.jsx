// import React from "react";
import Portfolio from "../assets/user-solid.png"
import GitHub from "../assets/square-github-brands-solid.png"
import Email from "../assets/envelope-solid.png"
import Light from "../assets/moon-regular.png"

function Header(props) {
    function LightMode(){

    }
    return (
        <header>
            <h1><em>{props.name}</em></h1>
            <nav>
                <ul>
                    <li><a href={props.portfolio}>{Portfolio}</a></li>
                    <li><a href="">{Email}</a></li>
                    <li><a href="">{GitHub}</a></li>
                </ul>
            </nav>
            <button onClick={LightMode()}>{Light}</button>
        </header>
    )
}

export default Header 