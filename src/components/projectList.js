import React from 'react';
import Menu from './Menu'
import slither from '../assets/slither.gif'
import pap from '../assets/pap.png'

const imgStyle = {
    borderRadius: "50%",
    width: 230,
    height: 220,
    boxShadow: "1px 2px 4px rgba(0, 0, 0, .8)",
};

const projectList = () => {
    return (
        <div className="project-list">
            <Menu />
            <div className="project-content">
                <div className="project-title">Projects</div>
                <div className="project-item">
                    <img style={imgStyle} src={slither} alt="Slither"></img>
                    <p>I implemented a reinforcement learning agent using OpenAI's Universe and Gym libraries to 
                            play an online multi-player game - <a href="http://slither.io/" target="_blank" rel="noopener noreferrer">Slither.io</a> </p>
                </div>
                <div className="project-item">
                    <img style={imgStyle} src={pap} alt="Pap Smear"></img>
                    <p>This project trains Convolutional Neural Network (CNN) models with the publicly available image dataset SIPaKMeD 
                            to classify normal/abnormal papsmear results.</p>
                </div>
            </div>
        </div>
    )
};

export default projectList;