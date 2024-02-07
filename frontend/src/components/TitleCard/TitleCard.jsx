import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import '../SkipArrow/SkipArrow.css' //using blinking thingy
import './TitleCard.css' //using blinking thingy
import github from '../../assets/img/github-mark.svg';
import linkedin from '../../assets/img/linkedin.svg';


import SkipArrow from '../SkipArrow/SkipArrow'

function TitleCard() {

  return ( 
    <Container className="flex flex-col justify-center items-center city-bg"  style={{margin: 0, width: "100vw", backgroundImage: `url('https://assets.playgroundai.com/985d8118-90c7-4695-ab4f-aa9300316346.jpg')`}}>
    
        <marquee className="m-0 text-white" scrollamount="50" behavior="scroll" direction="left">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</marquee>

        <div className="font-sans font-thin text-6xl mt-24 text-white">
            MIKO REYES
        </div>
        <div className="w-72 info-text font-sans font-thin text-sm text-white">
        </div>

        <div className="flex m-4">
            <div className="flex justify-center items-center rounded-full bg-white hover:bg-black duration-100 m-1 p-0 h-10 w-10">
                <a className="m-1" href="https://www.linkedin.com/in/hiro-miko-reyes-29b22b238/"><img className="socials ease-in duration-300 h-5 w-5" src={linkedin} alt="" /></a>
            </div>
            <div className="flex justify-center items-center rounded-full bg-white hover:bg-black duration-100 m-1 p-0 w-10 h-10 ">
                <a className="m-1 " href="https://github.com/hiromikoreyes"><img className="socials ease-in duration-300 h-8 w-8" src={github} alt=""/></a> 
            </div>
        </div>

        <marquee className="m-0 text-white" behavior="scroll"  scrollamount="20" direction="right">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</marquee>

        <div style={{witdh: "1280px"}}>

        </div>

    </Container>
  )
}

export default TitleCard;
