import React, { Component } from 'react';
import '../stylesheets/Intro.css';


class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="intro-left">
          <div className="intro-left-top">
            <h1 className="intro-letter"> S </h1>
            <h1 className="intro-word"> Software </h1>
          </div>
          <div className="intro-left-bot">
            <h1 className="intro-left-bot-text"> I'm passionate about solving problems through technical and human centric approaches </h1>
            <div className="intro-left-bot-dec1"></div>
          </div>
        </div>
        <div className="intro-right">
          <div className="intro-right-top">
            <h1 className="intro-letter"> D </h1>
            <h1 className="intro-word"> Developer </h1>
          </div>
          <div className="intro-right-bot">
            <h1> I build interactive web apps using React/Redux, Node.JS/Express, Ruby on Rails, JavaScript, HTML5/CSS3 and more </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
