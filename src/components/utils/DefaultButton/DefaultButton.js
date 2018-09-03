import React, { Component } from 'react';

import './DefaultButton.css';

export default class DefaultButton extends Component {
  render() {
    return (
      <button className="button" onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
}