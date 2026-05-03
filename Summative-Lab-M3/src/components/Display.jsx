// import React from "react";
import Project from "./Button"
import Search from "./SearchButton"

function Display(){
    return(
        <div>
            <div>
                <button onClick={Project()}>Add Project</button>
                <input name="Search" placeholder="Search for Project" required></input>
                <button onClick={Search()}>Search</button>
            </div>
            <div>
                <h3>Title</h3>
                <p>Description</p>
            </div>
        </div>
    )
}

export default Display