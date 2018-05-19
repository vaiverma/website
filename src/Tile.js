import React, { Component } from 'react';
import './App.css';
class Tile extends Component {
    render() {
      return (
        <div className="Tile" style={{backgroundColor: this.props.color}}>
          <span>{this.props.tileText}</span>
        </div>
      );
    }
  }
  
  export default Tile;