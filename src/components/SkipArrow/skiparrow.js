import React, {Component} from "react";
import './skiparrow.css'


function SkipArrow(){
    return(
    <div class="arrow-container">
        <div class="text-above-arrow">
            more about me...
        </div>
        <svg id="down-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" overflow="visible" stroke="white" stroke-width="9" stroke-linecap="round">
            <line x1="0" y1="5" x2="15" y2="25" />
            <line x1="30" y1="5" x2="15" y2="25" />
        </svg>
    </div>
    )
}

export default SkipArrow;