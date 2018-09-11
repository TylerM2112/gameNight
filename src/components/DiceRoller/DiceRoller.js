import React, { Component } from 'react';

import './DiceRoller.css';

import DefaultButton from '../utils/DefaultButton/DefaultButton';

export default class DiceRoller extends Component {
  constructor() {
    super();
    this.state = {
      diceSides: 0,
      rolledNumber: null,
      error: null
    }
  }

  setDice = (e) => {
    this.setState({
      diceSides: +e,
    })
   }

  //The minimum is inclusive and the maximum is inclusive
  getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;  
  }

  rollDice = () => {
    let number = null

    if (this.state.diceSides === 0) { 
      this.setState({
        error: "Please select the dice sides",
        rolledNumber: null
      })
      return;
    }
    //Changes roll for percentile dice if set to 100.
    if (this.state.diceSides === 100) {
      let min = 0
      let max = 10
      number = this.getRandom(min, max) * 10;
      if (number === 0) {
        number = "00"
      }
    }
    //All non percentile dice execute this block.
    else {
      let min = 1;
      number = this.getRandom(min, this.state.diceSides);
    }
    this.setState({
      rolledNumber: number,
      error: null,
    })
   }
  
  render() {
    return (
      <div className="diceRollerContainer">
        <div>
        <select className="diceSelector" onChange={ e => this.setDice(e.target.value)}>
          <option value='0'></option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="20">20</option>
          <option value="100">Percentile</option>
          </select>
          <DefaultButton onClick={this.rollDice}>Roll 'Em!</DefaultButton>
        </div>
        <div className="displayRoll">
          {this.state.rolledNumber}
          {this.state.error === null ? '' : this.state.error}
        </div>
      </div>
    );
  }
}