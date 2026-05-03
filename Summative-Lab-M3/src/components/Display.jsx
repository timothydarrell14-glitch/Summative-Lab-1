// import React from "react";

function SearchDisplay(){
    function search(){

    }
    return(
        <div>
            <div>
                {/* <button onClick={Project()}>Project</button> */}
                <input name="Search" placeholder="Search for Project" required></input>
                <button onClick={search}>Search</button>
            </div>
            <div>
                <h3>Title</h3>
                <p>Description</p>
            </div>
        </div>
    )
}

export default SearchDisplay