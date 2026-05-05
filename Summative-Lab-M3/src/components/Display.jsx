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
            <h3> Title: {object.title}<br /><small>05/05/2026</small></h3>
            <p><strong>Description: </strong> <em>{object.description}</em></p>
            </>
        )
    })}


            </div>
        </div >
    )

}

export default Display

// function tile(data){
//         return (
//             data.map((object) => {
//                 <>
//                 <h3> Title: {object.title}<br /><small>05/05/2026</small></h3>
//                 <p><strong>Description: </strong> <em>{object.description}</em></p>
//                 </>
//         })
//         )
//     }

{/* {console.log(array)} */ }
// {array.forEach((object) => {
//     <>
//     <h3 id={object.index}> Title: {object.title}<br /><small>05/05/2026</small></h3>
//     <p><strong>Description: </strong> <em>{object.description}</em></p>
//     </>
// })}