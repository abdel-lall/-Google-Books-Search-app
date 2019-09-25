import React, { Component } from "react"


class ResultDiv extends Component {

    render() {return(
        <div className="container" id="resultdiv">
            <h1 id="titleresults">{this.props.search ? "Results" : "Saved Books"}</h1>
            {this.props.children}
        </div>
    )}
}
export default ResultDiv