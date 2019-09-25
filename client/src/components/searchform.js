import React, { Component } from "react"



class SearchForm extends Component {

    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="col-12" id="colform">
                <form>
                <div className="form-group">
                    <label id="searchform">
                        Book Search :
                    <input type="text" name="search" className="form-control" id="inputsearch" />
                    </label>
                    <div className="text-right"><input type="submit" value="Submit" className="btn btn-primary" id="search"/></div>
                    
                </div>

            </form>
            </div>
            </div>
            </div>
        )


    }


}

export default SearchForm