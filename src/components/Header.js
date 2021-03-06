import React from 'react';
import profile from '../assets/profile.png'
import Menu from './Menu'

const HeaderStyle = {
    imgStyle: {
        borderRadius: "50%",
        boxShadow: "0 0 8px 0 rgba(255, 255, 255, .3)",
        width: 200,
        height: 180,
    },
};

const Header = () => {
    const classes = HeaderStyle
    return (
        <div class="header">
            <img style = {classes.imgStyle} src={profile} alt="Avatar"/>
            <h1 className="name">Morris Hsu</h1>
            <div className="intro">Just a Kid from Taiwan. Now Software Engineer @ Aetna</div>
            <div className="links" >
                <a href="https://www.linkedin.com/in/morris-hsu-657307bb/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin link"></i></a> 
                <a href="https://twitter.com/morris754" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter link"></i></a>
                <a href="https://github.com/whhsu2" rel="noopener noreferrer" target="_blank"><i className="fa fa-github link"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100001478117298" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook link"></i></a>
                <a href="mailto:morris754@gmail.com"><i className="fa fa-envelope link"></i></a>
            </div>
        </div>

    )  
};

export default Header;