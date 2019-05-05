import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends Component {
  render() {
    this.componentDidMount=()=>{
      document.title = "gatemanjs - Authorization for Node";
    }
    return (
      <div className="App">
        <Navbar/>
        <Home />
      </div>
    );
  }
}

export default App;
