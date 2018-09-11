import React, { Component } from 'react';

import './Roller.css';

import DefaultButton from '../../utils/DefaultButton/DefaultButton';
import {games} from '../games';

class Roller extends Component {
  constructor() {
    super();
    this.state = {
      gameScroller: false,
    }
}
  pickGame = () => {
  // let gameList = games;
  // let random = gameList[Math.floor(Math.random() * gameList.length)];

  // this.setState({
  //   selectedGame: random
  // })
  this.setState({
    gameScroller: !this.state.gameScroller
  })
}
  render() {
    return (
      <div>
        <h3>And the winning game is...</h3>
        <div class={this.state.gameScroller ? "container" : "hidden"}>
          <div class="innerContainer">
          
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
            <div className="gameName">{games[Math.floor(Math.random() * games.length)]}</div>
          </div>
        </div>
        <DefaultButton onClick={this.pickGame}>Click to Pick!</DefaultButton>
      </div>
    );
  };
};

export default Roller;