import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to='/' className="nav-link">Home</Link>
                            <Link to='Applications' className="nav-link">Applications</Link>
                            <Link to='Form' className="nav-link">Add Application</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;