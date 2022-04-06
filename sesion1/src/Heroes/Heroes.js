import React from "react";

function Heroes(props){
    return (
        <div className={props.ClassName}>
        <h1>{props.NombreSuper}</h1>
        <h3>{props.Identidad}</h3>

        {props.children}
        </div>
    )
}

export default Heroes
