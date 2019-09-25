import React, { Component } from "react"


class Card extends Component {

    render() {
        return (
            <div className="searchcard" key={this.props.key}>
                <div className='row'>
                    <div className="col-8">
                        <h2 id='bktitle'>{this.props.title}</h2>
                        <p>{this.props.author}</p>
                    </div>
                    <div className="col-4 text-right">
                        {this.props.search ? <div><a rel="noopener noreferrer" target="_blank" href={this.props.link}><button type="submit" value="Submit" className="btn btn-primary" id="view" >View</button></a>
                        <button type="submit" value="Submit" className="btn btn-primary" id="save" >Save</button> </div>:
                        <div><button type="submit" value="Submit" className="btn btn-primary" id="view" >View</button>
                        <button type="submit" value="Submit" className="btn btn-primary" id="delete" >Delete</button> </div>}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <img src={this.props.image} alt='book cover' id='bkcover' className='img-thumbnail'>
                        </img>
                    </div>
                    <div className='col-9'>

                        <p id='bkdescription'>{this.props.description}</p>


                    </div>
                </div>
            </div>
        )
    }
}

export default Card




