// import React, {useState} from "react";
import AddLink from "./AddLinks"

function AddProject() {

    return (
        <div id="addProject">
            <h2>Create Project</h2>
            
                <div>
                <input id="name" name="Title" placeholder="Title of your Project" required></input>
            </div>
            <div>
                <input id="description" name="Description" placeholder="Describe your project" required></input>
            </div>
            <div id="buttons">
                <button onClick={AddLink}>Add Links</button><br></br>
                {/* <button onClick={AddProject}>Add Project</button> */}
            </div>

        </div>
        // mkae this info an object then add to an array
    )
}

export default AddProject