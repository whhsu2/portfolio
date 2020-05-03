import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Menu extends Component {
    constructor() {
        super();
        this.state = {
          display: false,
        };
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
      }

      showMenu = (event) => {
        event.preventDefault();
        this.setState({ display: true }, () => {
        document.addEventListener('click', this.closeMenu);
        });
      }

      closeMenu = (event) => {
        this.setState({display: false}, () => {
          document.removeEventListener('click', this.closeMenu);
        });
      }

  render() {
    console.log(this.state.display)
    console.log("come on bitch")
    return (
      <div className="dropdown">
        <button className="dropbtn" id="dropbtn" onClick={this.showMenu}>
        ☰
        </button>
            { this.state.display ? (
            <div className="dropdown-content" id="drop-content">
            <div style={{marginBottom: "10px"}}><Link className="nav-button" to='/' id="nav-button">Home</Link></div>
            <div style={{marginBottom: "10px"}}><Link className="nav-button" to='/projectList'>Projects</Link></div>
            <div style={{marginBottom: "10px"}}><a className="nav-button" href="https://drive.google.com/open?id=1PQM_YIBgDa_5FwIjuSnJA5nOODuhd9dG">Resume</a></div>
            </div>
            ) :
            (
              null
            )
            }

      </div>
    );
  }
}

export default Menu;