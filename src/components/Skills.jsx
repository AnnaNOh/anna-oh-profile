import React, { Component } from 'react';
import '../stylesheets/Skills.css';


class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h1> Technical Skills </h1>
        <ul className="skill-list">
          <li className="skill-item">
            <em class="icon-photoshop"></em>
            <em class="icon-mysql"></em>
            <span class="icon-redis"></span>
            <a href="#" class="icon-rails"></a>
            <h1 className="skill-name"> Ruby </h1>
          </li>

        </ul>
      </div>
    );
  }
}

export default Skills;
