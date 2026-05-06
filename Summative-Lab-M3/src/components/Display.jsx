// import React from "react";

function Display({title, description }) {
    // console.log(list())

    // console.log(display.title)


    return (
        <div id="search">
            <div>
                <h2>Projects</h2>
            </div>

            <div id="result">

                <h3> Title: {title}<br></br><small>05/05/2026</small></h3>
                <p><strong>Description: {description}</strong> <em></em></p>

            </div>
        </div >
    )

}

export default Display

