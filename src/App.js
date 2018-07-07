import React, { Component } from 'react';

import './stylesheets/App.css';
import './stylesheets/Reset.css';

import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import Works from './components/Works.jsx';
import Skills from './components/Skills.jsx';
import Resume from './components/Resume.jsx';
import About from './components/About.jsx';
import Connect from './components/Connect.jsx';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Intro />
        <Works />
        <Skills />
        <Resume />
        <About />
        <Connect />
      </div>
    );
  }
}

export default App;
