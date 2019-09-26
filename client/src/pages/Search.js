import React, { Component } from "react"
import SearchForm from "../components/searchform"
import ResultDiv from "../components/resultdiv"
import Card from "../components/card"
import API from "../utils/API"
import Modal from "../components/modal"


class Search extends Component {
    state = {
        data: [],
        query: "",
        disarray: [],
        modal:{},
        title:""
    }

    searchBooks = (query) => {


        let disArray = []
        if (query !== "") {
            API.SearchBooks(query).then(resault => {

                if (resault) {

                    disArray = resault.data.items.map((ele) => {
                        
                        return (<div
                            key={ele.volumeInfo.infoLink+ele.volumeInfo.title}><Card
                                id={ele.accessInfo.id}
                                search={true}
                                title={ele.volumeInfo.title}
                                author={ele.volumeInfo.authors}
                                description={ele.volumeInfo.description}
                                image={ele.volumeInfo.imageLinks===undefined? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEXz9Pa5vsq2u8jN0dnV2N/o6u7FydPi5Onw8fS+ws3f4ee6v8v29/jY2+Hu7/Ly9PbJztbQ1dxJagBAAAAC60lEQVR4nO3b2ZaCMBREUQbDJOP//2wbEGVIFCHKTa+zH7uVRVmBBJQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCpdOzvQQqaq2KmuSrOzQ02lSeRem8rpsQq/ozg72Kj4UkAxEev8awnzs7P1yiIadsfpQXjfZCHhUCzbfmeurdNz6bDRsBWRsB+k0cXxdHjpa0wkTBn3hKnjzRZyEgYk3IeEv2RKWCt1cN9EJ0zjfm7Mq/rAVgUnbLpwnK/zA2tnuQmzJHquuqJq91blJuwmAW8rHbV3q2ITFrOAt7Xz3l2UmrBMlpcHe9fOUhOqRYVhFO/cqtSEy0H6bh/tJ1uhCctqlTB/NSnG9pOt1ISXjxLq825laVFowo9GaRPrF9talJqw3n6macaZ09yi1ISG2cLyriwePwxzi1ITru4s2naxma59TC2KTRjE83FqmQ6yeDaUDS3KTRhMV96h5TTSLD4HQ4uCE9bxePUU5pYL/3mD5o9CcMKgTONc39NNLrV5iK4aNLUoOWHQ38RQtW3nsm6db92i8ISvGBtct+hvwqyzBFxE9DehrcHlQPU1YWNvcNGirwlfNThv0ZOE9eJG1OsGZy36kVBdczU9e7RvAz5b9CFhqfIwSp4XwG+OwUWLPiRUV/33Z4tbGtTvGK635CfUDfb/SO5rt20N9t8m65fLT9g3GD5abDY2qC+lvEg4NjhEvLW4tUFvEj4a7OXq3TzoW8Jpg0PEzfk8SThv8EMeJFw1+O8SHmrQg4QHG/Qg4cEGxSc83KD4hIcblJ6w3L508TXh+vtDEpLw3GwDEpKQhOdznVD2fRr9tdpRw/1HqQndIeEvkXCXUlDC+1NBndsnge/fwyVnp9PGH3p95dm1WMKza4/fI37j+UPXR/c+2X9/hjQI0uO3LsyuMioM9A8Sjy/W1iIhY7Sn2tzpUahdWyXiNDNSxcWtSlCBAAAAAAAAAAAAAAAAAAAAAAAAAAAAwCn+AEXGNosxDBhFAAAAAElFTkSuQmCC" :ele.volumeInfo.imageLinks.thumbnail}
                                link={ele.volumeInfo.infoLink}
                                saveBook={this.saveBook}
                            /></div>)
                    })
                    console.log(disArray)
                    this.setState(prev => {
                        return {
                            disarray: disArray,
                            query: query,
                            data: resault.data.items
                        };
                    })
                } else {
                    disArray.push(<h1 key={"4"}>no result</h1>)
                    this.setState(prev => {
                        return {
                            disarray: disArray,
                            query: query,
                            data: resault.data.items
                        };
                    })
                }

            })
        }
    }
    saveBook= (title)=>{
      var resault=  this.state.data.filter(obj => {
            return obj.volumeInfo.title === title
          })
      let data={
        title: resault[0].volumeInfo.title,
        author: resault[0].volumeInfo.authors,
        description: resault[0].volumeInfo.description ,
        link: resault[0].volumeInfo.infoLink,
        image: resault[0].volumeInfo.imageLinks.thumbnail,
       }
  
       API.saveBook(data).then((res)=>{
        console.log(res.data.title)
        this.setState({modal: {display:"inline-block", backgroundColor: 'rgba(52, 52, 52, 0.8)'},
                        title: res.data.title})
        setTimeout( ()=> {
            this.setState({modal: {},
                            title: ""})
        }, 1500)
       });
    }
    componentDidUpdate() {
        console.log(this.state.data)
    }

    render() {
        return (

            <div className="container">

                <SearchForm searchBooks={this.searchBooks} />
                <ResultDiv search={true}
                >
                    {this.state.disarray}
                </ResultDiv>
                <Modal rol={"save"} styling={this.state.modal} title={this.state.title}/>
            </div>
        )
    }
}
export default Search