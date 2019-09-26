import React, { Component } from "react"
import ResultDiv from "../components/resultdiv"
import Card from "../components/card"
import API from "../utils/API"
import Modal from "../components/modal"

class Search extends Component {
    state = {
        disData: [],
        modal: {},
        title:""
    }
    componentDidMount() {
        API.getBooks().then((res) => {
            let disArray = []
            if (res.data) {

                disArray = res.data.map((ele) => {

                    return (<div
                        key={ele.title}><Card
                            id={ele._id}
                            title={ele.title}
                            author={ele.author}
                            description={ele.description}
                            image={ele.image}
                            link={ele.link}
                            deleteBook={this.deleteBook}
                        /></div>)
                })
                this.setState(prev => {
                    return {
                        disData: disArray,
                    };
                })
            } else {
                disArray.push(<h1 key={"4"}>no articles saved</h1>)
                this.setState(prev => {
                    return {
                        disData: disArray,
                    };
                })
            }
        })
    }
    deleteBook = (id) => {
        console.log(id)
        API.deleteBooks(id).then((res) => {
            this.setState({ modal: { display: "inline-block", backgroundColor: 'rgba(52, 52, 52, 0.8)' },
                            title: res.data.title })
            setTimeout(() => {
                this.setState({ modal: {} ,
                            title: ""})
            }, 1500)
            API.getBooks().then((res) => {
                let disArray = []
                if (res.data) {

                    disArray = res.data.map((ele) => {

                        return (<div
                            key={ele.title}><Card
                                id={ele._id}
                                title={ele.title}
                                author={ele.author}
                                description={ele.description}
                                image={ele.image}
                                link={ele.link}
                                deleteBook={this.deleteBook}
                            /></div>)
                    })
                    this.setState(prev => {
                        return {
                            disData: disArray,
                        };
                    })
                } else {
                    disArray.push(<h1 key={"4"}>no articles saved</h1>)
                    this.setState(prev => {
                        return {
                            disData: disArray,
                        };
                    })
                }
            })
        })
    }


    render() {
        return (
            <div className="container">
                <ResultDiv>
                    {this.state.disData}
                </ResultDiv>
                <Modal rol={""} styling={this.state.modal} title={this.state.title}/>
            </div>
        )
    }
}
export default Search