import React, { Component } from 'react';
import './App.css';
import UserInput from "./Components/UserInput"
import UserOutput from "./Components/UserOutput"
class App extends Component {
  state = {
    username: "Luke"
  }

  onNameChanged = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    
    return (
      <div className="App">
        <UserInput nameChanged={this.onNameChanged} username={this.state.username} />
        <UserOutput username="John" />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
