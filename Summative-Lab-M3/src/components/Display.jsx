// import React from "react";

function Display({title, description}) {
    // console.log(list())

    // console.log(display.title)


    return (
        <div id="search">
            <div id="result">

                <h2>Project</h2>
                <h3>{title}<br></br><small>05/05/2026</small></h3>
                <p><strong>Description: </strong> <em>{description}</em></p>

            </div>
        </div >
    )

}

export default Display

