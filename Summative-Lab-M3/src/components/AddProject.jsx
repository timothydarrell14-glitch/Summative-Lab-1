// import React from "react";
import AddLink from "./AddLinks"
import Project from "./ProjectButton"

function AddProject() {
    return (
        <div id="addProject">
            <h2></h2>
            <input id="name" name="Title" placeholder="Please Add the Title of your Project" required></input>
            <input id="description" name="Description" placeholder="Describe your project" required></input>
            <div>
                <button onClick={AddLink}>Add Links</button>
                <button onClick={Project}>Add Project</button>
            </div>

        </div>
        // mkae this info an object then add to an array
    )
}

export default AddProject