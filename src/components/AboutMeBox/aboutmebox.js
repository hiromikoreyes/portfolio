import './aboutmebox.css';

function AboutMeBox(){
    return(
        <div id="center-div">
            <div class="about-container">
                <div class="left-column">
                    <div class="img-container">
                        <img alt={"miko reyes photo"} src="https://media.licdn.com/dms/image/D5603AQHxcNZL5fPAjw/profile-displayphoto-shrink_800_800/0/1695763275265?e=1701302400&v=beta&t=Psdk6T3fg7iuuS_EBXE86bsk5e20s2rOFCCw2OXEyrg"/>
                    </div>

                    <div class="below-img-container">
                        hobbies: coding, music, powerlifting
                        <br></br>
                        <div style={{fontSize: "10px"}}>
                            <br></br>
                            S: 315lbs x 2
                            <br></br>
                            B: 225lbs x 2
                            <br></br>
                            D: 455lbs x 1
                        </div>

                    </div>

                </div>

                <div class="right-column">
                    <div class="title">
                        <u>About Me!</u>
                    </div>
                    <div class="paragraph">
                        <p>
                        Hi, I'm a <a style={{fontWeight: 500}}>Computer Science Specialist</a> and Music Minor at the
                        <a style={{fontWeight: 500}}> University Of Toronto</a>. My academic pursuits have allowed me
                        to delve into the fascinating world of technology while also developing my passion for music.
                        
                        </p>
                        <br></br>
                        <p>
                        CompSci-wise, I'm really interested in front-end, cool simulations, cool projects, and learning cool new things.
                        So far I've worked with: React, Flask, Android Studio and ... [you should check out my stuff below for the rest ;) ]
                        </p>
                        <br></br>
                        <p style={{textAlign: "center"}}>
                        [music-wise ... to be continued ...]
                        </p>

                        <br></br>
                        <p>
                        If you're interested in contacting me, I'd be delighted to connect and collaborate!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMeBox;