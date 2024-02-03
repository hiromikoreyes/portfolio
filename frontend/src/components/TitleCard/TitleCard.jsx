import { useState } from 'react'
import '../SkipArrow/SkipArrow.css' //using blinking thingy
import './TitleCard.css' //using blinking thingy

import SkipArrow from '../SkipArrow/SkipArrow'

function TitleCard() {

  return (
    <>
    
    <marquee className="m-0 text-white" scrollamount="50" behavior="scroll" direction="left">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</marquee>

      <div className="font-sans font-thin text-6xl mt-24 text-white">
      MIKO REYES
      </div>
      <div className="info-text font-sans font-thin text-sm text-white hover:animate-pulse">
      </div>

      <SkipArrow></SkipArrow>
      <marquee className="m-0 text-white" behavior="scroll"  scrollamount="20" direction="right">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</marquee>

      <div style={{witdh: "1280px"}}>

      </div>


    </>
  )
}

export default TitleCard;
