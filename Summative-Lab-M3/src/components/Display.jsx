// import React from "react";

function Display({ display }) {
    // console.log(list())

    // console.log(display.title)


    return (
        <div id="search">
            <div>
                <h2>Projects</h2>
            </div>

            <div id="result">

                <h3> Title: {display.title}<br /><small>05/05/2026</small></h3>
                <p><strong>Description: </strong> <em>{display.description}</em></p>

            </div>
        </div >
    )

}

export default Display

