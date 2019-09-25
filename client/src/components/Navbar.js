import React, { Component } from "react"



class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg ">
                <a className="navbar-brand" id="brand" href="/">Google Books</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        <a className="nav-link" id="search" href="/search">Search</a>
                        </li>
                        <li className="nav-item active">
                        <a className="nav-link" id="save" href="/save">Save</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }


}

export default Navbar