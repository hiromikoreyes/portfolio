import React, {Component} from "react";
import './navbar.css'

function Navbar() {
  return (
    <header class="header">
        <a href="#" class="logo">miko's portfolio</a>

        <label for="" class="icons">
            <i class='bx bx-menu'></i>
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