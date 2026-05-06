import {useState} from "react";
// import AddLink from "./AddLinks"

function AddProject({setProjects}) {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    function handleClick(){
        setProjects(prev => [...prev, {title: name, description: description}])
        alert("Project Added")
        setName("")
        setDescription("")
    }

    return (
        <div id="addProject">
            <h2>Create Project</h2>
            
                <div>
                <input id="name" name="title" placeholder="Title of your Project" required value={name}  onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <input id="description" name="description" placeholder="Describe your project" required value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div id="buttons">
                <button onClick={handleClick}>Add Project</button>
            </div>

        </div>
    )
}

export default AddProject