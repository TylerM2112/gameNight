import React, { Component } from 'react';
import logo from '../../logo.svg';
import './LandingPage.css';

import GamePicker from '../../components/GamePicker/GamePicker';
import DiceRoller from '../../components/DiceRoller/DiceRoller';


class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <header className="LandingPage-header">
          <img src={logo} className="LandingPage-logo" alt="logo" />
          <h1 className="LandingPage-title">Welcome to Game Night!</h1>
        </header>
        <div className="mainContent">
          <GamePicker />
          <DiceRoller />
        </div>
      </div>
    );
  }
}

export default LandingPage;