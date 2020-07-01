import React from 'react';
import About from './About'
import Experiences from './Experiences'
import Header from './Header'
import Projects from './Projects'
import ChatBot from './Chatbot';

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Experiences />
            <Projects />
            <ChatBot/>
        </div>
    );
};

export default Home;

