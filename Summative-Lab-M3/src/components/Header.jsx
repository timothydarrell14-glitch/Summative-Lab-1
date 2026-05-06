// import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

function Header({name, git, portfolio}) {

    return (
        <header>
            <h1>{name}</h1>
            <div>
                <ul>
                    <li><a className="list" href={portfolio} target="_blank" ><FontAwesomeIcon icon="fa-solid fa-user" style={{ color: "rgb(148, 114, 8)", }} /></a></li>
                    <li><a className="list" href={git} target='_blank'><FontAwesomeIcon icon="fa-brands fa-github" style={{ color: "rgb(148, 114, 8)", }} /></a></li>
                    <li><a className="list" href=""><FontAwesomeIcon icon="fa-solid fa-envelope" style={{ color: "rgb(148, 114, 8)", }} /></a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header 