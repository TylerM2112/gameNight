import React, { Component } from 'react';
import logo from '../../logo.svg';
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <header className="LandingPage-header">
          <img src={logo} className="LandingPage-logo" alt="logo" />
          <h1 className="LandingPage-title">Welcome to Game Night!</h1>
        </header>
      </div>
    );
  }
}

export default LandingPage;