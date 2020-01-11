import React from 'react';
import slither from '../assets/slither.gif'
import pap from '../assets/pap.bmp'

const imgStyle = {
    borderRadius: "50%",
    width: 230,
    height: 220,
    boxShadow: "1px 2px 4px rgba(0, 0, 0, .8)",
};

const Projects = () => {
    return (
            <div className="projects"> 
                <div className="title">Projects</div>
                <div className="row">
                    <div className="img-with-text">
                        <img style={imgStyle} src={slither} alt="Slither"></img>
                        <h2>Slither.io</h2>
                        <a href="https://github.com/whhsu2/slither.io_ReinforcementLearning" target="_blank" rel="noopener noreferrer">github</a>
                        <p>I implemented a reinforcement learning agent using OpenAI's Universe and Gym libraries to 
                         play an online multi-player game - <a href="http://slither.io/" target="_blank" rel="noopener noreferrer">Slither.io</a> </p>
                    </div>
                    <div className="img-with-text">
                        <img style={imgStyle} src={pap} alt="Pap Smear"></img>
                        <h2>Image Classification for Pap Smear</h2>
                        <a href="https://github.com/whhsu2/Pap-Smear" target="_blank" rel="noopener noreferrer">github</a>
                        <p>This project trains Convolutional Neural Network (CNN) models with the publicly available image dataset SIPaKMeD 
                            to classify normal/abnormal papsmear results.</p>
                    </div>
                    
                </div>
            </div>        
    )
};

export default Projects;