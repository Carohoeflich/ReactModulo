import React, { Component, Fragment } from "react";

class FocoMercurialClase extends Component {
    constructor(){
        super();
        this.state = {
            color: 'pink'
        }
    }

    render(){
        return(
            <Fragment>
            <div className="focoMercurial"
            style={{backgroundColor: this.state.color}}>
            </div>
            </Fragment>
        )
    }
}

export default FocoMercurialClase;