import React, { Component } from "react"
import SearchForm from "../components/searchform"
import ResultDiv from "../components/resultdiv"
import Card from "../components/card"
class Search extends Component {

    render() {return(
        <div className="container">
           
            <SearchForm/>
            <ResultDiv search={true}>
                <Card search={true} />
                <Card search={true}/>
            </ResultDiv>
            
        </div>
    )}
}
export default Search