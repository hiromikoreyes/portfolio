import { Component } from "react";
import './aboutmebox.css';

function AboutMeBox(){
    return(
        <div id="center-div">
            <div class="about-container">
                <div class="left-column">
                    <div class="img-container">
                        <img src="https://media.licdn.com/dms/image/D5635AQHNSlSu-_GyPA/profile-framedphoto-shrink_200_200/0/1695763277026?e=1696377600&v=beta&t=n2j7tVNedWO4YRPdxnaRcO7mS6FenhU9vLGsItyq_j8"/>
                    </div>

                    <div class="below-img-container">
                        hobbies: coding, music, gym
                    </div>
                </div>

                <div class="right-column">
                    <div class="title">
                        About Me!
                    </div>
                    <div class="paragraph">
                        <p>
                        Hi, I'm a <a style={{fontWeight: 500}}>Computer Science Specialist</a> and Music Minor at the
                        <a style={{fontWeight: 500}}> University Of Toronto</a>. 
                        </p>

                        <br></br>

                        <p>
                            I love learning things please give me a job!!!! please puh-leassee!!!
                            I love learning things please give me a job!!!! please puh-leassee!!!
                            I love learning things please give me a job!!!! please puh-leassee!!!
                            I love learning things please give me a job!!!! please puh-leassee!!!
                            I love learning things please give me a job!!!! please puh-leassee!!!
                        </p>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMeBox;