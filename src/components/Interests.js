import React from 'react';
import StraightenIcon from '@material-ui/icons/Straighten';

const Interests = () => {
    return (
        <div className="interests">
            <div className="title">Interests</div>
            <div className="interest-container">
                <div className="interest-box">
                    <div className="icon">
                        <i class="fa fa-podcast"></i>
                        <div>Podcast</div>
                    </div>
                    <div className="text">
                        <ul>
                            <li><a href="https://lexfridman.com/ai/">Artificial Intelligence by Lex Fridman:</a> An incredible Podcast about technology and how it will affect humans.
                                One episode I recommend is his conversation with Ray Dalio the founder of Bridgewater Associates, one of the most successful hedge funds. In which they
                                talked about building an idea meritocracy, future of AI and what makes people happy. <a href="https://www.youtube.com/watch?v=M95m2EFb7IQ&t=4498s">Link to Episode</a></li> 
                            <li><a href="http://investorfieldguide.com/podcast/">Invest Like the Best by Patrick O’Shaughnessy:</a> A Podcast about how you can best invest your time and money.
                            One episode I recommend is his conversation with Instagram Founder Kevin Systrom and Mike Krieger. In which they talked about the different stages of Instagram, how they 
                            implemented the jobs-to-be-done framework by Clayton Christensen and future big trends in tech. <a href="http://investorfieldguide.com/instagram/kevin-mike-v2/">Link to Episode</a> </li>
                        </ul>
                    </div>
                </div>
                <div className="interest-box">
                    <div className="icon">
                        <i class="fa fa-book"></i>
                        <div>Books</div>
                    </div>
                    <div className="text">
                        <ul>
                            <li>Below are some books that influenced how I think about the world and my life:</li>
                            <li><a href="https://www.amazon.com/War-Normal-People-Disappearing-Universal/dp/0316414247">The War on Normal People by Andrew Yang: </a>
                            As AI and automation start to replace most of the job we know of, Andrew one of the 2020 Democratic presidential candidates, proposed we implement Universal Basic Income to address
                            the problems of the 21st century. The book invoked me to think about some fundamental questions that challenged my world view. Is GDP the best way to measure how the economy is doing ? 
                            What are the metrics that actually reflect the well-being of normal people ? What are the problems that arise with technological disruption? 
                            </li>
                            <li><a href="https://gettingthingsdone.com/">Getting Things Done by David Allen: </a>A book about how to be more productive and organized. One key take away 
                            is for each project in life, define clear outcomes, what doing looks like and always be thinking about your next physical action.</li>
                        </ul>
                    </div>
                </div>
                <div className="interest-box">
                    <div className="icon">
                        <i><StraightenIcon></StraightenIcon></i>
                        <div>Piano</div>
                    </div>
                    <div className="text">
                        <ul>
                            <li>Inspired by FKJ, a french multi-instrumentalist, I started to learn Piano at the age of 24, without even knowing how to read sheet music. 
                                My goal is to be able to play Jazz piano at my own Jazz Bar. <a href="https://www.youtube.com/watch?v=Xk7Hx9eNrmU">Here is my favorite song by FKJ.</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default Interests;