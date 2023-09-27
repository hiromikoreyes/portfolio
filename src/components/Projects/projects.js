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
        
            <Carousel style={{backgroundColor: "rgba(2, 107, 30, 1)"}} data-bs-theme="light">
                <Carousel.Item>
                    <div>
                        <div class="under-card">
                            <h5>An OpenCV & Flask-powered memory game</h5>
                            <p><a href="https://devpost.com/software/memory-blinkr">a fun project for hack the north</a></p>
                        </div>
                        <div class="carousel-img-holder">
                                <img
                                className="d-block w-100"
                                src="https://user-images.githubusercontent.com/74735037/268496861-575a8374-b024-4223-babe-c5ba716dfa65.png"
                                alt="Memory Blinkr"
                                />
                                <div class="carousel-text-holder">
                                    <p>
                                        This was my first <a style={{fontWeight: 750, color: "white"}}> hack the north </a> project (2023).
                                    </p>
                                    <br></br>
                                    <p>
                                    Like with any good hackathon experience, my team and I pulled an all-nighter during the weekend to get this game complete.
                                    </p>
                                    
                                    <p>
                                        The premise of the game is "how much can you remember in one blink?"
                                        While we don't often think about this, this game actually puts that to the test with THREE different gamemodes.
                                    </p>

                                    <br></br>

                                    <p>
                                        There's a tile memory game, image similarity game, and word memory game.
                                    </p>
                                </div>
                        </div>


                        </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <div class="under-card">
                                <h5>Orbiting Sim</h5>
                                <p><a href="https://github.com/hiromikoreyes/orbiting_sim">an orbiting sim using grade 12 physics knowledge</a></p>
                        </div>

                        <div class="carousel-img-holder">
                            <img
                            className="d-block w-100"
                            src="https://i.imgur.com/YQihv2r.gif"
                            alt="orbiting_sim"
                            />
                            <div class="carousel-text-holder">
                                <p>
                                A simple, but fun project using Pygame, where I used my fargone grade
                                12 physics to simulate the orbits of particles/planets in space.
                                </p>
                                <br></br>
                                <p>tl;dr [F=G(m_1)(m_2)/r^2]</p>

                            </div>
                        </div>

                   </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div class="under-card">
                            <h5>wiki-scrape</h5>
                            <p><a href="https://github.com/hiromikoreyes/wiki-scrape">a simple webscraping app</a></p>
                        </div>
                        <div class="carousel-img-holder">
                            <img
                            className="d-block w-100"
                            src="https://i.imgur.com/5W0XPRv.png"
                            alt="wiki-scrape"
                            />

                             <div class="carousel-text-holder">
                                <p>
                                    Uses BeautifulSoup and Flask to get user queries, then display articles
                                    from Wikipedia based on those articles.

                                </p>
                                <br>
                                </br>
                                In my next off semester, I plan to make this project look nicer + optimize the webscraping portion.

                            </div>
                        </div>
                </Carousel.Item>
                <Carousel.Item>
                        <div class="under-card">
                            <h5>Marketplace App</h5>
                            <p><a href="https://github.com/QvQ12/b07FinalProject_Group9">final project for a Software Design Course</a></p>
                        </div>
                        <div class="carousel-img-holder">
                            <img
                            className="d-block w-100"
                            style={{height: "600px"}}
                            src="https://i.imgur.com/hVSvl4T.png"
                            alt="wiki-scrape"
                            />

                             <div class="carousel-text-holder">
                                <p>
                                    A Marketplace App made with Android Studio and Firebase.
                                </p>

                            </div>
                        </div>
                </Carousel.Item>
            </Carousel>
    </div>
    );
}

export default Projects;