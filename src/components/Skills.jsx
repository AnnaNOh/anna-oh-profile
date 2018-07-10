import React, { Component } from 'react';
import '../stylesheets/Skills.css';
import '../stylesheets/Skills-TechIcons.css';

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h1> Technical Skills </h1>
        <ul className="skill-list">
          <li className="skill-item">
            <em className="icon icon-ruby"></em>
            <h1 className="skill-name"> Ruby </h1>
          </li>
          <li className="skill-item">
            <em className="icon icon-rails"></em>
            <h1 className="skill-name"> Ruby on Rails </h1>
          </li>
          <li className="skill-item">
            <em className="icon icon-js"></em>
            <h1 className="skill-name"> Javascript </h1>
          </li>
          <li className="skill-item">
            <em className="icon icon-react"></em>
            <h1 className="skill-name"> React.js </h1>
          </li>
          <li className="skill-item">
            <em className="icon icon-postgres"></em>
            <h1 className="skill-name"> PostgreSQL </h1>
          </li>
          <li className="skill-item">
            <em className="icon icon-mongodb"></em>
            <h1 className="skill-name"> MongoDB </h1>
          </li>
          <li className="skill-item">
            <em className="icon icon-d3"></em>
            <h1 className="skill-name"> D3 </h1>
          </li>
          <li className="skill-item">
            <em className="icon icon-nodejs"></em>
            <h1 className="skill-name"> Node.js </h1>
          </li>
          <li className="skill-item">
            <em className="icon icon-express"></em>
            <h1 className="skill-name"> Express </h1>
          </li>
          <li className="skill-item">
            <em className="icon icon-jquery"></em>
            <h1 className="skill-name"> JQuery </h1>
          </li>
          <li className="skill-item">
            <em className="icon icon-html5"></em>
            <h1 className="skill-name"> HTML5 </h1>
          </li>
          <li className="skill-item">
            <em className="icon icon-css3"></em>
            <h1 className="skill-name"> CSS3 </h1>
          </li>
          <li className="skill-item">
            <em className="icon icon-sass"></em>
            <h1 className="skill-name"> Sass </h1>
          </li>
          <li className="skill-item">
            <em className="icon icon-babel"></em>
            <h1 className="skill-name"> Babel </h1>
          </li>
          <li className="skill-item">
            <em className="icon icon-webpack"></em>
            <h1 className="skill-name"> Webpack </h1>
          </li>

        </ul>
      </div>
    );
  }
}

export default Skills;
