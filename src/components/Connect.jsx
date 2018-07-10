import React, { Component } from 'react';
import '../stylesheets/Connect.css';


class Connect extends Component {
  render() {
    return (
      <div className="connect">
        <h1> Let's Connect. </h1>
        <p> Email me or check out more of my work on GitHub </p>
        <ul className="connect-list">
          <li className="connect-item">
            <i id="envelope" className="connect-icon fas fa-envelope"></i>
          </li>
          <li className="connect-item">
            <i id="github" className="connect-icon fab fa-github"></i>
          </li>
          <li className="connect-item">
            <i id="linkedin" className="connect-icon fab fa-linkedin-in"></i>
          </li>
          <li className="connect-item">
            <i id="angellist" className="connect-icon fab fa-angellist"></i>
          </li>
        </ul>
      </div>
    );
  }
}

export default Connect;
