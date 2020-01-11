import React from 'react';
import mount from '../assets/mount2.jpg'
import profile from '../assets/profile.png'

const HeaderStyle = {
    background: {
        background: `url(${mount})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
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
        <div style={classes.background}>
            <img style = {classes.imgStyle} src={profile} alt="Avatar"/>
            <h1>Morris Hsu</h1>
            <p>Just a Kid from Taiwan</p>
            <div className="links" >
                <a href="https://www.linkedin.com/in/morris-hsu-657307bb/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a> 
                <a href="https://twitter.com/morris754" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter"></i></a>
                <a href="https://github.com/whhsu2" rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100001478117298" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook"></i></a>
            </div>
        </div>

    )  
};

export default Header;