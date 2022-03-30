import React from "react";
import TercerComponent from "./TercerComponent";

function SegundoComponent(){
    return (
        <div>
            Mi segundo componente. Hijo de mi primer componente.
            <TercerComponent></TercerComponent>
        </div>
    )
}

export default SegundoComponent