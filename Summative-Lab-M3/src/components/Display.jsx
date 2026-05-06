// import React from "react";

function Display({ display }) {
    // console.log(list())

    // console.log(display)


    return (
        <div id="search">
            <div>
                <h2>Projects</h2>
            </div>

            <div id="result">
                {display.forEach((object, index) => {

                    `<h3 id="${index}"> Title: ${object.title}<br /><small>05/05/2026</small></h3>
                     <p><strong>Description: </strong> <em>${object.description}</em></p>`

                    // console.log(object)
                    // console.log(title)
                    // console.log(description)
                })}

            </div>
        </div >
    )

}

export default Display