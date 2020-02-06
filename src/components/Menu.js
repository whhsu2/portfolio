import React, {Component} from 'react';
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
      
      showMenu(event) {
        event.preventDefault();
        
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }
      
      closeMenu() {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
      }

  render() {
    console.log(this.state.showMenu)
    return (
      <div className="dropdown">
        <button className="dropbtn" onClick={this.showMenu}>
        ☰
        </button>
        {
          this.state.showMenu
            ? (
              <div className="dropdown-content">
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
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Menu;