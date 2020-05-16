import React from 'react';
import HDS from '../assets/HDS.png'
import family from '../assets/family.png'
import friends from '../assets/friends.png'

const About = () => {
    return (
        <div className="about section"> 
            <div className="title">About Me</div>
            <div className="image-wrapper">
                <div className="image-container">
                    <img src={HDS} alt="Health Data Science" ></img>
                    <div className="image-caption">
                        <h1>Harvard Health Data Science class of 2019. A great great group of people</h1>
                    </div>
                </div>
                <div className="image-container">
                    <img src={family} alt="Family" height="220px" width="320px"></img>
                    <div className='image-caption'>
                        <h1>Family at Paris</h1>
                    </div>
                </div>
                <div className="image-container">
                    <img src={friends} alt="Friends" height="220px" width="320px"></img>
                    <div className="image-caption">
                        <h1>Friends</h1>
                    </div>
                </div> 
            </div>
            <div className="me">
                <p>I just graduated from Harvard Health Data Science program and currently am working at Aetna as a Data Engineer.
                I am interested in the intersection of technology and healthcare to deliver healthier outcomes. 
                </p>
                <p>
                In leasure time, I wrtie some full stack and front end projects. Besides coding, I started to learn Piano at the age of 24,  
                without even knowing how to read sheet music. Inspired by FKJ, a french multi-instrumentalist, my goal is to be able to play Jazz piano at my own Jazz Bar.
                </p>

                <p>
                    <a href="https://drive.google.com/open?id=1PQM_YIBgDa_5FwIjuSnJA5nOODuhd9dG">Resume</a>
                </p>
            </div>       
        </div>
        
    )
}

export default About;