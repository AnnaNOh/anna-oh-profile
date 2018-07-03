import React, { Component } from 'react';
import '../stylesheets/Header.css';


class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header-name">Anna Oh</h1>
        <ul className="header-menu">
          <li> SELECTED WORKS </li>
          <li> TECH STACK </li>
          <li> RESUME </li>
          <li> ABOUT </li>
          <li> CONNECT </li>
        </ul>
      </div>
    );
  }
}

export default Header;
