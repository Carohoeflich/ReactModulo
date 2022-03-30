import React from "react";
import CuartoComponent from "./CuartoComponent";

function TercerComponent(){
    return (
        <div>
            Tercer componente. Hijo del componente dos.
            <CuartoComponent></CuartoComponent>
        </div>
    )
}

export default TercerComponent