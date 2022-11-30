import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

class Car extends React.Component {
    constructor(color) {
    super ()
    this.color = "black";
    }
    render() {
        const {model} = this.props;
      return (
        <div>
    <h1>this car is{this.color} {model} </h1>
    </div>
    );
    }
  }

  export default Car;
  