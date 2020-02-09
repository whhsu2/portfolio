import React, {Component, useState} from 'react';
import ScrollIntoView from 'react-scroll-into-view'

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
        document.removeEventListener("transitionend", this.changeDisplay)
        let drop = document.getElementById("drop-content");
        drop.style.display = "block";
        setTimeout(function () {
          drop.style.opacity = 100;
        }, 2);
        document.addEventListener('click', this.closeMenu);
      }

      closeMenu = (event) => {
        let drop = document.getElementById("drop-content");
        drop.style.opacity = 0;
        drop.style.display = "none"
        document.removeEventListener('click', this.closeMenu);
      }

  render() {
    return (
      <div className="dropdown">
        <button className="dropbtn" onClick={this.showMenu}>
        ☰
        </button>
          <div className="dropdown-content" id="drop-content">
            <ScrollIntoView className="nav-button" selector=".about">
                    About
            </ScrollIntoView>    
            <ScrollIntoView className="nav-button" selector=".experience">
                    Experiences
            </ScrollIntoView>
            <ScrollIntoView className="nav-button" selector=".projects">
                    Projects
            </ScrollIntoView>
            <ScrollIntoView className="nav-button" selector=".interests">
                    Interests
            </ScrollIntoView>
          </div>
      </div>
    );
  }
}

export default Menu;