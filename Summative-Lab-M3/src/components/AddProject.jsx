// import React from "react";
import AddLink from "./AddLinks"
import Project from "./ProjectButton"

function AddProject() {
    return (
        <div>
            <h2></h2>
            <input name="Title" placeholder="Please Add Name of your Project" required></input>
            <input name="Description" placeholder="Describe your project" required></input>
            <div>
                <button onClick={AddLink()}>Add Links</button>
                <button onClick={Project()}>Add Project</button>
            </div>

        </div>
        // mkae this info an object then add to an array
    )
}

export default AddProject