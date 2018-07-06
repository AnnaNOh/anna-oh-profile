import React, { Component } from 'react';
import '../stylesheets/Header.css';


class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-background"></div>
        <h1 className="header-name">Anna</h1>
        <h1 className="header-name-2">Oh</h1>
        <ul className="header-menu">
          <li className="header-menu-li"> SELECTED WORKS </li>
          <li className="header-menu-li"> TECH STACK </li>
          <li className="header-menu-li"> RESUME </li>
          <li className="header-menu-li"> ABOUT </li>
          <li className="header-menu-li"> CONNECT </li>
        </ul>
      </div>
    );
  }
}

export default Header;
