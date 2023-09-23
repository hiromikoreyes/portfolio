import React, {Component} from "react";
import './navbar.css'

function Navbar() {
  return (
    
    <header class="header">

        
        <a href="#" class="logo">miko's portfolio</a>
    
        <input type="checkbox" id="check"></input>
        <label for="check" class="icons">
            <svg id="menu-icon" viewBox="0 0 30 30" width="30" height="30" overflow="visible" stroke="white" stroke-width="9" stroke-linecap="round">
                <line x1="0" y1="0" x2="30" y2="0" />
                <line x1="0" y1="15" x2="30" y2="15" />
                <line x1="0" y1="30" x2="30" y2="30" />
            </svg>

            <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" overflow="visible" stroke="white" stroke-width="9" stroke-linecap="round">
                <line x1="0" y1="0" x2="30" y2="30" />
                <line x1="30" y1="0" x2="0" y2="30" />
            </svg>
        </label>

        <nav class="navbar">
            <a href="#">home</a>
            <a href="#">code</a>
            <a href="#">music</a>
            <a href="#">contact</a>
            <a href="#">munky</a>
        </nav>

    </header>

  );
}


export default Navbar;