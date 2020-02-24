import React from 'react';
import './index.scss';

function Banner(props){
    return(
        <div className="container-fluid">
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <h1 className="title">Tide Management Services</h1>
                                <h2 className="subtitle">We provide homes for anyone who needs one.</h2>
                            </div>
                            <div className="column">
                                <figure>
                                    <img className="img-banner" src="https://res.cloudinary.com/githigi-tech/image/upload/v1582557834/tide/2885863_rep4je.png" alt="tide management services" />
                                </figure>
                            </div>
                        </div>
                        
                    </div>   
                </div>
            </section>
        </div>
    )
}

export default Banner;