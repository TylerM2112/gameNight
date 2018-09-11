import React, { Component } from 'react';
import './terraformingMars.css';
export default class TerraformingMars extends Component {
  constructor() {
    super();

    this.state = {
      money: {
        current: 0,
        production: 1
      },
      steel: {
        current: 0,
        production: 1
      },
      titanium: {
        current: 0,
        production: 1
      },
      trees: {
        current: 0,
        production: 1
      },
      energy: {
        current: 0,
        production: 1
      },
      heat: {
        current: 0,
        production: 1
      },

      currentSelected: null,
      hideModal: true,
    }
    
  }

  makeModal = () => {
    // <button className="backBtn" onClick={() => this.setState({ hideModal: true })}>Back</button>
    if(!this.state.hideModal) {
      return (        
      <div className="modal">
        <h1>{ this.state.currentSelected.toUpperCase() }</h1>
        <div class="flexDiv">
          <div>
            <h2>Production</h2>
             <h3> {this.state[this.state.currentSelected].production} </h3>
            <button className="minusBtn"
              onClick={(e) => this.changeProduction(1,false, 'production')}>-1</button>
            <button className="plusBtn"
              onClick={(e) => this.changeProduction(1,true, 'production')}>+1</button>

            <br />
      
            <button className="minusBtn"
              onClick={(e) =>this.changeProduction(5,false, 'production')}>-5</button>
            <button className="plusBtn"
              onClick={(e) => this.changeProduction(5,true, 'production')}>+5</button>

            <br />
            <button className="minusBtn"
              onClick={(e) =>this.changeProduction(10,false, 'production')}>-10</button>
            <button className="plusBtn"
              onClick={(e) => this.changeProduction(10,true, 'production')}>+10</button>
    
    </div>

    <div>
    <h2>Current</h2>
    <h3>{this.state[this.state.currentSelected].current}</h3>
    <button  className="minusBtn"
      onClick={(e) =>this.changeProduction(1,false, 'current')}>-1</button>
    <button className="plusBtn"
      onClick={(e) => this.changeProduction(1,true, 'current')}>+1</button>
    
    <button  className="minusBtn"
      onClick={(e) => this.changeProduction(5,false, 'current')}>-5</button>
    <button className="plusBtn"
      onClick={(e) => this.changeProduction(5,true, 'current')}>+5</button>

      <button  className="minusBtn"
      onClick={(e) => this.changeProduction(10,false, 'current')}>-10</button>
    <button className="plusBtn"
      onClick={(e) => this.changeProduction(10,true, 'current')}>+10</button>
  
  </div>
  </div>
      </div>)
    }

    else {
      return '';
    }
  }

  changeProduction = (multiplier, position, currOrProd) => {
    const { currentSelected } = this.state;
    let resourseState = {...this.state[currentSelected]};

    resourseState[currOrProd] = position ? resourseState[currOrProd] + multiplier : resourseState[currOrProd] - multiplier;
    console.log(resourseState);
    if(currentSelected === 'money' && currOrProd === 'production') {
      if(resourseState.production <= -6) {
        return
      }
      else {
        this.setState({[currentSelected]: resourseState });
        return
      }
    }

    if(currentSelected !== 'money' && resourseState.production < 0) {
      console.log('hi');
      return}
    
    if(currOrProd === 'current' && resourseState.current < 0) {} 
    else {
      this.setState({[currentSelected]: resourseState });
      return
    }
  }
  render() {
    return (
      <div className="TMmainContainer">
        <div>
          <div 
            onClick={() => {this.setState({
              currentSelected: 'money',
              hideModal: false,
            })}}>
            Money
            <br/>
            Current Money: { this.state.money.current }
            <br />
            Money Production: { this.state.money.production }
          </div>
          
          <div 
            onClick={() => {this.setState({
              currentSelected: 'steel',
              hideModal: false,
            })}}>
            Steel
            <br/>
            Current Steel: {this.state.steel.current}
            <br />
            Steel Production: { this.state.steel.production }
          </div>

          <div 
          onClick={() => {this.setState({
            currentSelected: 'titanium',
            hideModal: false,
          })}}>
          Titanium
          <br/>
          Current Titanium: {this.state.titanium.current}
          <br />
          Titanium Production: { this.state.titanium.production }
        </div>

        </div>
        <div>
        <div 
        onClick={() => {this.setState({
          currentSelected: 'trees',
          hideModal: false,
        })}}>
        Trees
        <br/>
        Current Trees: {this.state.trees.current}
        <br />
        Tree Production: { this.state.trees.production }
        </div>
        <div 
        onClick={() => {this.setState({
          currentSelected: 'energy',
          hideModal: false,
        })}}>
        Energy
        <br/>
        Current Energy: {this.state.energy.current}
        <br />
        Energy Production: { this.state.energy.production }
      </div>
      <div 
      onClick={() => {this.setState({
        currentSelected: 'heat',
        hideModal: false,
      })}}>
      Heat
      <br/>
      Current Heat: {this.state.heat.current}
      <br />
      Heat Production: { this.state.heat.production }
    </div>
        </div>

        {this.makeModal()}
      </div>
    );
  }
}