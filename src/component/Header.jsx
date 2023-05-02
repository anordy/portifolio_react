import React, { Component } from "react";


export default class Header extends Component {
    render() {
        return(
           <div>
             
        <header class="header">
        <p class="logo">
          Portifolio
        </p>
        <i class="bx bx-menu" id="menu-icon"></i>
        <nav class="navbar">
          <a href="#home" class="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#service">Services</a>
          <a href="#portifolio">Portifolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
           </div>
        )
    }
}