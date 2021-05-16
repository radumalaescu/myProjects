import React, { Component } from 'react';
import Validation from './components/Validation'
import Char from './components/Char'
import './App.css';


class App extends Component {
  state = {
    inputText: ""
  }
  showText = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }
  
  deleteCharHandler = (index) => {
    const char = this.state.inputText.split("")
    char.splice(index, 1)
    const updatedChar = char.join("")
    this.setState({inputText: updatedChar})
  }

  render() {
    let chars = this.state.inputText.split("").map((char, index) => {
      return <Char characters={char} clicked={() => this.deleteCharHandler(index)}/>
    })

    return (
      <div className="App">
        <input type="text" onChange={this.showText}/>
        <Validation inputLength={this.state.inputText.split("").length} />
        {chars}
      </div>
    );
  }
}

export default App;
