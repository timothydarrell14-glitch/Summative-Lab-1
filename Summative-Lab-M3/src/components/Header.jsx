// import React from "react";

function Header(props) {

    function handleClick(){
        
    }
    return (
        <header>
            <h1>{props.name}</h1>
            <nav>
                <ul>
                    <li><a href={props.portfolio} target="_blank" >{props.user}</a></li>
                    <li><a href="">{props.git}</a></li>
                    <li><a href="">{props.mail}</a></li>
                </ul>
                <button onClick={handleClick}>{props.toggle}</button>
            </nav>
        </header>
    )
}

export default Header 