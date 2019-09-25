import React, { Component } from "react"



class SearchForm extends Component {
state={
    query :''
}
handleChange=(event)=>{
    this.setState({query: event.target.value}) 
}
    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="col-12" id="colform">
                <form>
                <div className="form-group">
                    <label id="searchform">
                        Book Search :
                    <input 
                    type="text" 
                    name="search" 
                    className="form-control" 
                    id="inputsearch" 
                    value={this.state.query}
                    onChange={(event)=>{this.handleChange(event)}}/>
                    </label>
                    <div className="text-right"><input type="submit" value="Submit" className="btn btn-primary" id="search" 
                    onClick={(e)=>{ e.preventDefault(); this.props.searchBooks(this.state.query)}}/></div>
                    
                </div>

            </form>
            </div>
            </div>
            </div>
        )


    }


}

export default SearchForm