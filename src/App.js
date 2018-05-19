import React, { Component } from 'react';
import './App.css';
import Tile from './Tile';

const data = {
  name: "Vaibhav Verma",
  profession: "UX Designer",
  email: "vaibhav.verma30jan@gmail.com",
  phone: "+91 8586048890",

}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Greeting">
          <span>Hello! I'm</span>
        </div>
        <div className="Name">
          <span>{ data.name }, { data.profession }</span>
        </div>
        <div className="Contact">
          <span>{ data.phone} | { data.email }</span>
        </div>        
        <div class="Tiles">
          <Tile tileText="Portfolio" color="#4285f4"/>
          <Tile tileText="Resume" color="#fbbc05"/>
          <Tile tileText="Blog" color="#34a853"/>
          <Tile tileText="Profile" color="#ea4335"/>
        </div>
      </div>
    );
  }
}

export default App;
