import React, { Component } from 'react';

import './GamePicker.css';

import Roller from './Roller/Roller';
import {games} from './games';

export default class GamePicker extends Component {
  constructor() {
    super();
    this.state = {
      gameList: games,
      gameInput: '',
      selectedGame: '',
      gameScroller: false,
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

  render() {
    return (
      <div className="pickerContainer">
        <div className="gameList">
          <h4>available games to play...</h4>
          {this.displayList()}
        </div>
        <div className="chosenGame">
          <Roller />
        </div>

      </div>
    );
  }
}