import React from 'react';
import ReactGA from "react-ga"
import About from './components/About'
import Menu from './components/Menu'
import Experiences from './components/Experiences'
import Header from './components/Header'
import Projects from './components/Projects'
import Interests from './components/Interests'
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <About />
      <Experiences />
      <Projects />
      <Interests />
    </div>
  );
}

export default App;
