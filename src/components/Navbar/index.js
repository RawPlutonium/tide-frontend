import React from 'react';
import './index.scss';

function Navbar(props){
return(
<div>
    <nav className="navbar is-transparent">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
                <img src="https://res.cloudinary.com/githigi-tech/image/upload/v1582463271/tide/default-monochrome-black_jr3rfc.svg" alt="Tide Management Services" className="navbrand"/>
            </a>
            <div className="columns">
                <div className="column is-half">
                </div>
                    <div className="navbar-burger burger" data-target="tidenav">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id="tidenav" className="navbar-menu">
                        <div className="navbar-start">
                                <a className="navbar-item" href="">
                                Home
                                </a>
                                <a className="navbar-item" href="">
                                Story
                                </a>
                                <a className="navbar-item" href="">
                                Services
                                </a>
                                <a className="navbar-item" href="">
                                Contact
                                </a>
                        </div>
                    </div>
            </div>
        </div>
    </nav>
</div>
 
)
}
export default Navbar;