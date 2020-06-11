import React from 'react';
import slither from '../assets/slither.gif'
import pap from '../assets/pap.png'
import py from '../assets/python2.png'
import survey from '../assets/survey.jpg'
import chat from '../assets/chat.png'

const Projects = () => {
    return (
            <div className="projects section"> 
                <div className="title">Projects</div>
                <div className="row">
                    <div className="img-with-text">
                        <div style={{backgroundImage: `url(${slither})`, backgroundPosition: "center", backgroundSize: "300px 300px"}} className="project-image"></div>
                        <h3>Slither.io</h3>
                        <a href="https://github.com/whhsu2/slither.io_ReinforcementLearning" target="_blank" rel="noopener noreferrer" style={{fontWeight: "bold"}}>github</a>
                        <p>We implemented a reinforcement learning agent using OpenAI's Universe and Gym libraries to 
                         play an online multi-player game - <a href="http://slither.io/" target="_blank" rel="noopener noreferrer">Slither.io</a> </p>
                    </div>
                    <div className="img-with-text">
                        <div style={{backgroundImage: `url(${pap})`, backgroundPosition: "center", backgroundSize: "300px 300px"}} className="project-image"></div>
                        <h3>Image Classification for Pap Smear</h3>
                        <a href="https://github.com/whhsu2/Pap-Smear" target="_blank" rel="noopener noreferrer" style={{fontWeight: "bold"}}>github</a>
                        <p>This project trains Convolutional Neural Network (CNN) models with the publicly available image dataset SIPaKMeD 
                            to classify normal/abnormal papsmear results.</p>
                    </div>   
                    <div className="img-with-text">
                        <div style={{backgroundImage: `url(${py})`, backgroundPosition: "center", backgroundSize: "300px 300px"}} className="project-image"></div>
                        <h3>Python Library Development: Automatic Differentiation</h3>
                        <a href="https://github.com/CS207-Feiyu-Group8/cs207-FinalProject" target="_blank" rel="noopener noreferrer" style={{fontWeight: "bold"}}>github</a>
                        <p>Developed a Python library that can perform automatic differentiation (AD), a computational method for solving derivatives.</p>
                    </div>  
                    <div className="img-with-text">
                        <div style={{backgroundImage: `url(${survey})`, backgroundPosition: "center", backgroundSize: "300px 300px"}} className="project-image"></div>
                        <h3>Email Survey App</h3>
                        <a href="https://desolate-plateau-73931.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{fontWeight: "bold"}}>demo</a>
                        <p>This is a full stack application that sends email surveys and collects responses. It is built using react, redux, stripe and mongodb.</p>
                    </div>   
                    <div className="img-with-text">
                        <div style={{backgroundImage: `url(${chat})`, backgroundPosition: "center", backgroundSize: "300px 300px"}} className="project-image"></div>
                        <h3>Message Morris</h3>
                        <a href="https://message-morris.herokuapp.com/login" target="_blank" rel="noopener noreferrer" style={{fontWeight: "bold"}}>demo</a>
                        <p>This is a chat app I built for fun and to explore Ruby on Rails 6 and Action Cable. Users can sign up/log in with a username and chat in the chat room.</p>
                    </div>                 
                </div>
            </div>        
    )
};

export default Projects;