import React from 'react';
import About from './About'
import Experiences from './Experiences'
import Header from './Header'
import Projects from './Projects'
import Interests from './Interests'

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Experiences />
            <Projects />
            <Interests />           
        </div>
    );
};

export default Home;

