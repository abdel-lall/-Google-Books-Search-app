import React, { Component } from "react"
import ResultDiv from "../components/resultdiv"
import Card from "../components/card"
class Search extends Component {

    render() {return(
        <div className="container">
            <ResultDiv>
                <Card />
                <Card/>
            </ResultDiv>
            
        </div>
    )}
}
export default Search