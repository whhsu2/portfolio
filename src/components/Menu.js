import React, {Component, useState} from 'react';
import {Link} from "react-router-dom";

class Menu extends Component {
    constructor() {
        super();
        
        this.state = {
          showMenu: false,
        };
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
      }

      showMenu = (event) => {
        let drop = document.getElementById("drop-content");
        drop.style.display = "block";
        setTimeout(function () {
          drop.style.opacity = 100;
        }, 2);
        document.getElementById('dropbtn').addEventListener('click', this.closeMenu);
      }

      closeMenu = (event) => {
        let parent = document.getElementById("drop-content");
        let inner = document.getElementsByClassName("nav-button");
        document.getElementById('dropbtn').removeEventListener('click', this.closeMenu);
      }

  render() {
    return (
      <div className="dropdown">
        <button className="dropbtn" id="dropbtn" onClick={this.showMenu}>
        ☰
        </button>
            <div className="dropdown-content" id="drop-content">
              <div style={{marginBottom: "10px"}}><Link className="nav-button" to='/'>Home</Link></div>
              <div style={{marginBottom: "10px"}}><Link className="nav-button" to='/projectList'>Projects</Link></div>
              <div style={{marginBottom: "10px"}}><a className="nav-button" href="https://drive.google.com/open?id=1PQM_YIBgDa_5FwIjuSnJA5nOODuhd9dG">Resume</a></div>
            </div>
      </div>
    );
  }
}

export default Menu;