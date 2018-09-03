import React, { Component } from 'react';

import DefaultButton from '../utils/DefaultButton/DefaultButton';

export default class DiceRoller extends Component {
  constructor() {
    super();
    this.state = {
      rolledNumber4: '',
      rolledNumber6: '',
      rolledNumber12: '',
    }
  }

  getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  rollD4 = () => {
    let rand = this.getRandom(1, 4);
    console.log(rand)
    this.setState({
      rolledNumber4: rand
    })
  }
  rollD6 = () => {
    let rand = this.getRandom(1, 6);
    console.log(rand)
    this.setState({
      rolledNumber6: rand
    })
  }
  rollD12 = () => {
    let rand = this.getRandom(1, 12);
    console.log(rand)
    this.setState({
      rolledNumber12: rand
    })
  }
  
  render() {
    return (
      <div className="diceRollerContainer">
        <div className="diceContainer">
          <DefaultButton onClick={this.rollD4}>D4</DefaultButton>
          {this.state.rolledNumber4}
        </div>
        <div className="diceContainer">
          <DefaultButton onClick={this.rollD6}>D6</DefaultButton>
          {this.state.rolledNumber6}
        </div>
        <div className="diceContainer">
          <DefaultButton onClick={this.rollD12}>D12</DefaultButton>
          <p>{this.state.rolledNumber12}</p>
        </div>
      </div>
    );
  }
}