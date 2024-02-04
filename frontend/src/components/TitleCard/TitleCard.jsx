import { useState } from 'react'
import '../SkipArrow/SkipArrow.css' //using blinking thingy
import './TitleCard.css' //using blinking thingy

import SkipArrow from '../SkipArrow/SkipArrow'

function TitleCard() {

  return ( 
    <div className="backdrop-blur-3xl city-bg" style={{backgroundImage: `url('https://assets.playgroundai.com/985d8118-90c7-4695-ab4f-aa9300316346.jpg')`}}>
    
    <marquee className="m-0 text-white" scrollamount="50" behavior="scroll" direction="left">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</marquee>

      <div className="font-sans font-thin text-6xl mt-24 text-white">
      MIKO REYES
      </div>
      <div className="info-text font-sans font-thin text-sm text-white">
      </div>

      <SkipArrow></SkipArrow>
      <marquee className="m-0 text-white" behavior="scroll"  scrollamount="20" direction="right">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</marquee>

      <div style={{witdh: "1280px"}}>

      </div>


    </div>
  )
}

export default TitleCard;
