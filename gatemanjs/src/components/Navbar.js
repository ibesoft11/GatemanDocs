import React, { Component } from 'react';

import '../components/Navbar.css';

class Navbar extends Component {
    render() {
      return (
    <div>
      <nav className="navbar">
      <div className="container navbar-container">
          <ul className="navbar-menu">
              <li key={"home"} className="navbar-menuItem">
                <a href='#' className="navbar-menuLink">Home</a>
              </li>
              <li key={"home"} className="navbar-menuItem">
                <a href='#' className="navbar-menuLink">Documentation</a>
              </li>
              <li key={"home"} className="navbar-menuItem">
                <a href='#' className="navbar-menuLink">API</a>
              </li>
              <li key={"home"} className="navbar-menuItem">
                <a href='#' className="navbar-menuLink">Blog</a>
              </li>
          </ul>
      </div>
    </nav>
    </div>
    );
    } 
}

export default Navbar;