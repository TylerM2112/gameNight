import React, { Component } from 'react';
import logo from '../../logo.svg';
import './LandingPage.css';

import DefaultInput from '../../components/utils/DefaultInput/DefaultInput';
import DefaultButton from '../../components/utils/DefaultButton/DefaultButton';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <header className="LandingPage-header">
          <img src={logo} className="LandingPage-logo" alt="logo" />
          <h1 className="LandingPage-title">Welcome to Game Night!</h1>
        </header>
        <DefaultInput placeholder="add your game here!">game title</DefaultInput>
        <DefaultButton onClick={() => alert('Gotcha!')}>Add</DefaultButton>
      </div>
    );
  }
}

export default LandingPage;