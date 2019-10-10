import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';


const Navbar = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light container-fluid ">
            <a className="navbar-brand" href="/"><img src={require("../../Assets/Img/logo.png")} alt="logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-4">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Buy Insurance</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/settings">Account Settings</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown ">
                        <a className="nav-link" href="#navbarDropdownMenuLink" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img alt="profile pic" src={require("../../Assets/Img/Profile.png")} /> Lois Dorello <i className="fas fa-chevron-down"></i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="/">Action</a>
                        <a className="dropdown-item" href="/">Another action</a>
                        <a className="dropdown-item" href="/">Something else here</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Navbar;