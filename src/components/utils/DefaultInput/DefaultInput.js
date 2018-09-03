import React, { Component } from 'react';
import './DefaultInput.css';

export default class DefaultInput extends Component {
  render() {
    return (
      <div className="inputContainer">
        <p>{this.props.children}</p>
        <input placeholder={this.props.placeholder} onChange={this.props.onChange}/>
      </div>
    );
  }
}
