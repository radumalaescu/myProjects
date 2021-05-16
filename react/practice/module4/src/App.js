import React, { Component } from 'react';
import './App.css';
import CharComponent from './components/CharComponent';
import ValidationComponent from './components/ValidationComponent';

class App extends Component {

  state = {
    inputText: ""
  }
  inputLength = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }

  deleteCharacter = (index) => {
    let char = this.state.inputText.split("")
    char.splice(index, 1)
    let updatedChar = char.join("")
    this.setState({inputText: updatedChar})
  }

  render() {
    const charList = this.state.inputText.split("").map((char, index) => {
      return <CharComponent character={char} clicked={() => this.deleteCharacter(index)} />
    })

    return (
      <div className="App">
        <input type="text" onChange={this.inputLength}/>
        <ValidationComponent textLength={this.state.inputText.split("").length}/>
        {charList}
      </div>
    );
  }
}

export default App;
