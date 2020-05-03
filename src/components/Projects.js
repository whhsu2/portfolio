import React from 'react';
import slither from '../assets/slither.gif'
import pap from '../assets/pap.png'

const Projects = () => {
    return (
            <div className="projects section"> 
                <div className="title">Projects</div>
                <div className="row">
                    <div className="img-with-text">
                        <img src={slither} alt="Slither" className="project-image"></img>
                        <h3>Slither.io</h3>
                        <a href="https://github.com/whhsu2/slither.io_ReinforcementLearning" target="_blank" rel="noopener noreferrer" style={{fontWeight: "bold"}}>github</a>
                        <p>We implemented a reinforcement learning agent using OpenAI's Universe and Gym libraries to 
                         play an online multi-player game - <a href="http://slither.io/" target="_blank" rel="noopener noreferrer">Slither.io</a> </p>
                    </div>
                    <div className="img-with-text">
                        <img src={pap} alt="Pap Smear"  className="project-image"></img>
                        <h3>Image Classification for Pap Smear</h3>
                        <a href="https://github.com/whhsu2/Pap-Smear" target="_blank" rel="noopener noreferrer" style={{fontWeight: "bold"}}>github</a>
                        <p>This project trains Convolutional Neural Network (CNN) models with the publicly available image dataset SIPaKMeD 
                            to classify normal/abnormal papsmear results.</p>
                    </div>                 
                </div>
            </div>        
    )
};

export default Projects;