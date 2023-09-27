import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './projects.css';

function Projects(){
    return(
    <div>
    
            <div style={{fontSize: "48px", color: "white", textAlign: "center",
                            margin: "10rem 0 10rem", width: "100%"}}>
            
                <a style={{backgroundColor: "#026b1e", padding: "12px 24px 24px", borderRadius: "24px"}}>projects</a>
            </div>
        
            <Carousel data-bs-theme="light">
                <Carousel.Item>
                    <div class="under-card">
                        <h5>A OpenCV & Flask-powered memory game</h5>
                        <p><a href="https://devpost.com/software/memory-blinkr">a fun project for hack the north</a></p>
                    </div>
                    <img
                    className="d-block w-100"
                    src="https://user-images.githubusercontent.com/74735037/268496861-575a8374-b024-4223-babe-c5ba716dfa65.png"
                    alt="Memory Blinkr"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <div class="under-card">
                            <h5>Orbiting Sim</h5>
                            <p><a href="https://github.com/hiromikoreyes/orbiting_sim">self-explanatory title</a></p>
                    </div>
                        <img
                        className="d-block w-100"
                        src="https://i.imgur.com/YQihv2r.gif"
                        alt="orbiting_sim"
                        />

                </Carousel.Item>
                <Carousel.Item>
                    <div class="under-card">
                            <h5>A OpenCV & Flask-powered memory game</h5>
                            <p><a href="https://devpost.com/software/memory-blinkr">a fun project from hack the north</a></p>
                        </div>
                        <img
                        className="d-block w-100"
                        src="https://user-images.githubusercontent.com/74735037/268496861-575a8374-b024-4223-babe-c5ba716dfa65.png"
                        alt="Memory Blinkr"
                        />
                </Carousel.Item>
                <Carousel.Item>
                        <div class="under-card">
                            <h5>A OpenCV & Flask-powered memory game</h5>
                            <p><a href="https://devpost.com/software/memory-blinkr">a fun project from hack the north</a></p>
                        </div>
                        <img
                        className="d-block w-100"
                        src="https://user-images.githubusercontent.com/74735037/268496861-575a8374-b024-4223-babe-c5ba716dfa65.png"
                        alt="Memory Blinkr"
                        />

                </Carousel.Item>
            </Carousel>
    </div>
    );
}

export default Projects;