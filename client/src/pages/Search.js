import React, { Component } from "react"
import SearchForm from "../components/searchform"
import ResultDiv from "../components/resultdiv"
import Card from "../components/card"
import API from "../utils/API"



class Search extends Component {
    state = {
        data: [],
        query: "",
        disarray: []
    }

    searchBooks = (query) => {

        
            let disArray = []
            if (query !== "") {
                API.SearchBooks(query).then(resault => {

                    if (resault) {
                        
                        disArray = resault.data.items.map((ele) => {
                            
                            return (<div
                                key={ele.volumeInfo.title}><Card
                                key={ele.accessInfo.id}
                                search={true}
                                title={ele.volumeInfo.title}
                                author={ele.volumeInfo.authors}
                                description={ele.volumeInfo.description}
                                image={ele.volumeInfo.imageLinks.thumbnail}
                                link={ele.volumeInfo.infoLink}
                            /></div>)
                        })
                        console.log(disArray)
                        this.setState(prev => {
                        return {disarray : disArray,
                                query: query,
                                data: resault.data.items};})
                    } else {
                        disArray.push(<h1 key={"4"}>no result</h1>)
                        this.setState(prev => {
                            return {disarray : disArray,
                                    query: query,
                                    data: resault.data.items};})
                    }

                }
                )
            }

        
    }
    componentDidUpdate() {
        console.log(this.state.data)
    }

    render() {
        return (

            <div className="container">

                <SearchForm searchBooks={this.searchBooks} />
                <ResultDiv search={true}>
                    {this.state.disarray}
                </ResultDiv>

            </div>
        )
    }
}
export default Search