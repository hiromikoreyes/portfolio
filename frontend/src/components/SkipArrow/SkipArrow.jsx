import React, {Component} from "react";
import './skiparrow.css'
import {scrollToAbout} from '../../scripts/navigation'

function SkipArrow(){
    return(
    <div className="py-12 arrow-container">
        <a onClick={scrollToAbout}>
            <svg id="down-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" overflow="visible" stroke="white" stroke-width="9" strokeLinecap="round">
                <line x1="0" y1="5" x2="15" y2="25" />
                <line x1="30" y1="5" x2="15" y2="25" />
            </svg>
        </a>
    </div>
    )
}

export default SkipArrow;