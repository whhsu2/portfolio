import React from 'react';
import Menu from './Menu'
import slither from '../assets/slither.gif'
import pap from '../assets/pap.png'
import py from '../assets/python2.png'

const projectList = () => {
    return (
        <div className="project-list">
            <Menu />
            <div className="project-content">
                <div className="project-title">Projects</div>
                <div className="project-item">
                    <img className="project-img" src={slither} alt="Slither"></img>
                    <div className="project-text">
                    <h3>Slither.io - <a href="https://github.com/whhsu2/slither.io_ReinforcementLearning" target="_blank" rel="noopener noreferrer" style={{fontWeight: "bold"}}>[github]</a></h3>
                    <p>We implemented a reinforcement learning agent using OpenAI's Universe and Gym libraries to 
                            play an online multi-player game - <a href="http://slither.io/" target="_blank" rel="noopener noreferrer">Slither.io</a>. The system is split up into 1) image processing and 2) leaning agent implementation. 
                            We used the OpenAI Universe library for image processing and implemented Approximate Q-Learning, an off-policy, model free algorithm for agent training.
                            </p>
                    </div>
                </div>
                <div className="project-item">
                    <img className="project-img" src={py} alt="py"></img>
                    <div className="project-text">
                    <h3>Python Library Development: Automatic Differentiation - <a href="https://github.com/CS207-Feiyu-Group8/cs207-FinalProject" target="_blank" rel="noopener noreferrer" style={{fontWeight: "bold"}}>[github]</a></h3>
                    <div>Differentiation forms the core of both traditional statistics methods such as Maximum-Likelihood Estimators, and leading edge methods in machine learning such as neural networks and sampling. 
                    We developed a Python library that can perform automatic differentiation (AD), a computational method for solving derivatives. A common problem in these fields is the need to take the gradient 
                    of an arbitrary function, which may not have a closed form analytical solution. Our package, autodiffy, addresses this by providing forward-mode automatic differentiation. 
                    Written in Python, it evaluates both the value of a user-supplied function and its derivative at a given point.</div>
                    </div>
                </div>
                <div className="project-item">
                    <img className="project-img" src={pap} alt="Pap Smear"></img>
                    <div className="project-text">
                    <h3>Image Classification for Pap Smear - <a href="https://github.com/whhsu2/Pap-Smear" target="_blank" rel="noopener noreferrer" style={{fontWeight: "bold"}}>[github]</a></h3>
                    <p>Cervical cancer is the third most common cancer worldwide for women. One of the methods of preventing cervical cancer is frequent screening with pap smear test. This project trains Convolutional Neural Network (CNN) models with the publicly available image dataset SIPaKMeD 
                            to classify normal/abnormal papsmear results. We trained VGG-11, Resnet-18, Resnet-50 and Resnet-101. Accomplished 94% classification accuracy with Resnet-50.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default projectList;