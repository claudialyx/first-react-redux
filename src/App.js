import React, { Component } from 'react';
import './App.css';
import DisplayMessagesContainer from './DisplayMessagesContainer'


class App extends Component {

  render() {
    return (
      <div>
        <h1>My First React-Redux app</h1>
        <h2> Simple display message function:</h2>
        <DisplayMessagesContainer />
      </div>
    );
  }
}

export default App;
