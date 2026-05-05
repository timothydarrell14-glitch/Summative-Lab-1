// import React from "react";

function Display({ display }) {


    return (
        <div id="search">
            <div>
                <h2>Projects</h2>
            </div>

            <div id="result" >

                {display.forEach((object) => {
                    return (
                        <>
                        <h3>{object.title}</h3>
                        <p><strong>Description: </strong> <em>{object.description}</em></p>
                        </>
                    )
                })}

                <h3> Title: <br /><small>05/05/2026</small></h3>
                <p><strong>Description: </strong> <em></em></p>

            </div>
        </div >
    )

}

export default Display