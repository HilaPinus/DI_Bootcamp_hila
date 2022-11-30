import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

class Garge extends React.Component {
    constructor(color) {
    super ()
    this.color = "black";
    }
    render() {
        const {model} = this.props;
      return (
    <h1>
       this car is{this.color} {model} 
    </h1>
    );
    }
  }

  export default Car;
  