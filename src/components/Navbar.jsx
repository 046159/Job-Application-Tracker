import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to='/' className="nav-link">Home</Link>
                            <Link to='Applications' className="nav-link">Applications</Link>
                            <Link to='Form' className="nav-link">Add Application</Link>
                            <Link to='Contact' className="nav-link">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;