import React, { Component, Fragment } from "react";

class LuzMercurialClase extends Component {
    constructor(){
        super();
        this.state = {
            color: 'pink'
        }
    }

    render(){
        return(
            <Fragment>
            <div className="luzMercurial"
            style={{backgroundColor: this.state.color}}>
            </div>
            </Fragment>
        )
    }
}

export default LuzMercurialClase;