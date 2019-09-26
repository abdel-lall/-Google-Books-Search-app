import React,{Component} from "react";


class Modal extends Component{



    render(){
        return(<div className="modal" tabIndex="-1" role="dialog" style={this.props.styling}>
        <div className="modal-dialog" role="document" >
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title" id="artsvd">{this.props.rol==="save"? `${this.props.title} Has Been Saved` : `${this.props.title} Has Been Deleted`}</h1>
                </div>
            </div>
        </div>
    </div>)
    }
}
export default  Modal;