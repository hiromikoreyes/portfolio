import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import '../SkipArrow/SkipArrow.css' //using blinking thingy
import './TitleCard.css' //using blinking thingy
import github from '../../assets/img/github-mark.svg';
import linkedin from '../../assets/img/linkedin.svg';



function TitleCard() {
    const [githubBrightness, setGithubBrightness] = useState('dark');
    const [linkedinBrightness, setLinkedinBrightness] = useState('dark');

  return ( 
    <Container className="flex flex-col justify-center items-center city-bg"  style={{margin: 0, width: "100vw", backgroundImage: `url('https://assets.playgroundai.com/985d8118-90c7-4695-ab4f-aa9300316346.jpg')`}}>
    
        <marquee className="m-0 text-white" scrollamount="50" behavior="scroll" direction="left">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</marquee>

        <div className="font-sans font-thin text-6xl mt-24 text-white">
            MIKO REYES
        </div>
        <div className="w-72 info-text font-sans font-thin text-sm text-white">
        </div>

        <div className="flex m-4">
            <a onMouseEnter={() => setGithubBrightness('light')}
                onMouseLeave={() => setGithubBrightness('dark')}
                className="flex justify-center items-center rounded-full bg-white hover:bg-black duration-100 m-1 p-0 h-10 w-10"
                href="https://github.com/hiromikoreyes">
               <img id="github" className={`${githubBrightness} ease-in duration-300 h-8 w-8`} src={github} alt=""/>
            </a>
            <a onMouseEnter={() => setLinkedinBrightness('light')}
                onMouseLeave={() => setLinkedinBrightness('dark')}
                className="flex justify-center items-center rounded-full bg-white hover:bg-black duration-100 m-1 p-0 h-10 w-10"
                href="https://github.com/hiromikoreyes">
                <img id="linkedin" className={`${linkedinBrightness} ease-in duration-300 h-5 w-5`} src={linkedin} alt="" />
            </a>
        </div>

        <marquee className="m-0 text-white" behavior="scroll"  scrollamount="20" direction="right">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</marquee>

        <div style={{witdh: "1280px"}}>

        </div>

    </Container>
  )
}

export default TitleCard;
