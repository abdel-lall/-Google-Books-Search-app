import React, { Component } from "react"


class Card extends Component {

    render() {
        return (
            <div className="searchcard">
                <div className='row'>
                    <div className="col-8">
                        <h2 id='bktitle'>Harry potter</h2>
                        <p>written by : me</p>
                    </div>
                    <div className="col-4 text-right">
                        {this.props.search ? <div><button type="submit" value="Submit" className="btn btn-primary" id="view" >View</button>
                        <button type="submit" value="Submit" className="btn btn-primary" id="save" >Save</button> </div>:
                        <div><button type="submit" value="Submit" className="btn btn-primary" id="view" >View</button>
                        <button type="submit" value="Submit" className="btn btn-primary" id="delete" >Delete</button> </div>}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <img src="https://picsum.photos/200" alt='book cover' id='bkcover' className='img-thumbnail'>
                        </img>
                    </div>
                    <div className='col-9'>

                        <p id='bkdescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


                    </div>
                </div>
            </div>
        )
    }
}

export default Card




