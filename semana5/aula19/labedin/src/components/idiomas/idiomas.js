import React from "react";
import "./Idiomas.css"

function Idiomas (props){
    return (
    <div className = "idiomas-conatiner">
        <div>
        <h4>{props.lingua}</h4> 
        <p>{props.nivel}</p>
        </div>
        
    </div>
    )
}
export default Idiomas