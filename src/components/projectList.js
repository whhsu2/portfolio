import React from 'react';
import Menu from './Menu'
import slither from '../assets/slither.gif'
import pap from '../assets/pap.png'
import python from '../assets/python.png'

const imgStyle = {
    borderRadius: "50%",
    width: 230,
    height: 220,
    boxShadow: "1px 2px 4px rgba(0, 0, 0, .8)",
    marginRight: "50px"
};

const projectList = () => {
    return (
        <div className="project-list">
            <Menu />
            <div className="project-content">
                <div className="project-title">Projects</div>
                <div className="project-item">
                    <img style={imgStyle} src={slither} alt="Slither"></img>
                    <div className="project-text">
                    <h3>Slither.io</h3><p>I implemented a reinforcement learning agent using OpenAI's Universe and Gym libraries to 
                            play an online multi-player game - <a href="http://slither.io/" target="_blank" rel="noopener noreferrer">Slither.io</a> </p>
                    </div>
                </div>
                <div className="project-item">
                    <img style={imgStyle} src={pap} alt="Pap Smear"></img>
                    <div className="project-text">
                    <h3>Image Classification for Pap Smear</h3><p>This project trains Convolutional Neural Network (CNN) models with the publicly available image dataset SIPaKMeD 
                            to classify normal/abnormal papsmear results.</p>
                    </div>
                </div>
                <div className="project-item">
                    <img style={imgStyle} src={python} alt="Python"></img>
                    <div className="project-text">
                        <h3>Python Library Development: Automatic Differentiation</h3>
                        <p>
                        The goal of this project was to develop a Python library that can perform automatic differentiation (AD): a computational method for solving derivatives. Before automatic differentiation, computational solutions to derivatives either involved taking finite differences (lacking in precision), or performing symbolic differentiation (lacking in speed). In short, AD provides the best of both worlds, computing derivates extremely quickly and to machine precision. 
                        One incredibly important application of the derivative is optimization. Machines are able to traverse gradients iteratively through calculations of derivatives. However, in machine learning applications, it is possible to have millions of parameters for a given neural network, which leads to a combinatorially onerous number of derivatives to compute analytically. Furthermore, finite difference methods can lead to truncation errors that are orders of magnitude greater than machine precision.
                        In this webpage we shall provide a background for understanding how AD works, then move on to revealing our library structure and implementation, and finally presenting a few use cases with working examples of the library in action. 
                        As a final note, we chose the name of our package to be Dotua, which is (autoD) backwards. 
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default projectList;