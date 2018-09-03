import React, { Component } from 'react';

import './GamePicker.css';

import DefaultInput from '../utils/DefaultInput/DefaultInput';
import DefaultButton from '../utils/DefaultButton/DefaultButton';

export default class GamePicker extends Component {

  constructor() {
    let games = ['Dominion', 'Exploding Kittens', 'Munchkins', 'Pandemic', 'Bravest Warriors', 'Catan', 'Boss Monster', 'Terraforming Mars']
    super();
    this.state = {
      gameList: games,
      gameInput: '',
      selectedGame: '',
    }
  }

  addGame = () => {
    if (this.state.gameInput.trim() === '') {
      return;
    }
    let gamesArray = this.state.gameList.slice();
    gamesArray.push(this.state.gameInput);
    this.setState({
      gameList: gamesArray
    })
  }

  displayList = () => {
    return (
      this.state.gameList.map(game => {
        return (
          <div key={game}>{game}</div>
        )
      })
    )
  }

  pickGame = () => {
    let gameList = this.state.gameList;
    let random = gameList[Math.floor(Math.random() * gameList.length)];

    this.setState({
      selectedGame: random
    })
  }

  render() {
    return (
      <div className="pickerContainer">
        <div className="gameList">
          <h4>available games to play...</h4>
          {this.displayList()}
        </div>
        <DefaultInput placeholder="game title" onChange={(e) => {
          this.setState({ gameInput: e.target.value })
        }}>add a game here...</DefaultInput>
          <DefaultButton onClick={this.addGame}>Add</DefaultButton>
        <div className="chosenGame">
          <h3>And the winning game is...</h3>
          <p>{this.state.selectedGame}</p>
          <DefaultButton onClick={this.pickGame}>Click to Pick!</DefaultButton>
        </div>

      </div>
    );
  }
}