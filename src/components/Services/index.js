import React from 'react';
import './index.scss';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

function About(props){
    return(
        <div id="abt">
        
            <div className="abt-area">
            <div className="container">
                <div className="header has-text-centered">
                    <h1 className="title" >Services</h1>
                    <br/>
                    <div className="abt-intro">
                    <p> Officia sit dolor ad voluptate dolore do. Sit laboris pariatur sit aute aliquip commodo. Adipisicing laborum labore nulla nostrud dolor eiusmod esse id ipsum ea minim. Ea elit nulla reprehenderit amet dolor eu voluptate.</p>
                    </div>
                    <br/>
                </div>
                <div className="abt_body">
                   <div className="columns">
                   <Slide right>
                        <div className="column is-4">
                        <div class="box">
                            <article class="media">
                            <div class="media-content">
                                <div class="content">
                                
                                <div className="has-text-centered">
                                    <span className="img">
                                    <Zoom>
                                        <img src="https://res.cloudinary.com/githigi-tech/image/upload/v1582575887/tide/tide_enrlfi.svg" width="100" />
                                    </Zoom> 
                                    </span>

                                </div>
                                
                                <br/><br/>
                                <p className="has-text-centered" >
                                     <strong className="title">Why choose Tide</strong>
                                </p>
                                <br/>
                                  <p>Cillum aute ut consequat quis. Enim velit dolore adipisicing aute veniam commodo quis. Aliquip laboris ut qui commodo ex officia veniam reprehenderit in minim deserunt dolor ad. Fugiat officia occaecat mollit ullamco cillum aliquip quis excepteur dolore.</p>
                                  <br/>
                                  <br/>
                                  <br/>
                                  &nbsp;
                                </div>
                            </div>
                            </article>
                      </div>
                        </div>
                        </Slide>
                        <Slide right>
                        <div className="column is-4">
                       
                        <div class="box">
                            <article class="media">
                            <div class="media-content">
                                <div class="content">
                                <div className="has-text-centered">
                                <span className="img">
                                <Zoom>
                                 <img src="https://res.cloudinary.com/githigi-tech/image/upload/v1581951205/Junglecoffee/team_flpibx.svg" width="100"/>
                                </Zoom>
                                 </span>
                                </div>
                                <br/><br/>
                                <p className="has-text-centered">
                                    <strong className="title">Skilled team</strong>
                                </p>
                                <p>Ut excepteur commodo sint ad minim aliquip. Aliqua pariatur nostrud non non anim quis ullamco anim. Tempor velit consequat sunt voluptate eu ex aliqua. Adipisicing est sunt do enim do. Reprehenderit anim sint occaecat nostrud officia. Aliqua in deserunt eu ipsum adipisicing ea occaecat consectetur dolor occaecat velit voluptate.</p>
                                   <br/>
                                   <br/>
                                   <br/>
                                   
    
                                </div>
                            </div>
                            </article>
                      </div>
                      
                        </div>
                        </Slide>
                        <Slide right>
                        <div className="column is-4">
                        
                        <div class="box">
                            <article class="media">
                            <div class="media-content">
                                <div class="content">
                                <div className="has-text-centered">
                                <span className="img">
                                <Zoom>
                                <img src="https://res.cloudinary.com/githigi-tech/image/upload/v1582575799/tide/growth_thyyir.svg" width="100" />
                                </Zoom>
                                </span>
                                </div>
                                <br/><br/>
                                <p className="has-text-centered">
                                    <strong className="title">Consulting</strong>
                                </p>
                                <br/>
                                    <p>
                                    Anim ipsum velit ullamco tempor nisi amet reprehenderit voluptate. Labore magna nisi tempor voluptate Lorem mollit officia sint magna duis veniam ea in ut. Do cupidatat fugiat consequat in minim non laborum nulla occaecat nulla et est. Occaecat tempor do nulla ea. Irure ut laborum dolore amet cupidatat officia pariatur culpa fugiat laboris. Laboris culpa reprehenderit velit dolore aute. 
                                    <br/><br/>&nbsp;
                                    </p>
                                </div>
                            </div>
                            </article>
                      </div>
                        </div>
                        </Slide>
                   </div>
                   
                </div>
            </div>
        </div>
        </div>
)}

export default About;