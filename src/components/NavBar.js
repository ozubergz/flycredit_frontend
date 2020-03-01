import React from 'react';
// import { Menu } from 'semantic-ui-react';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
                <a className="navbar-brand" href="#">LOGO</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-4">
                            <a className="nav-link" href="#">HOME</a>
                        </li>
                        <li className="nav-item mr-4">
                            <a className="nav-link" href="#">BLOGS</a>
                        </li>
                        <li className="nav-item mr-4">
                            <a className="nav-link" href="#">ABOUT</a>
                        </li>
                        <li className="nav-item mr-4">
                            <a className="nav-link" href="#">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;