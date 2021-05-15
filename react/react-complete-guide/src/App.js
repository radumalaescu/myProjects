import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = ({
    persons: [
      { name: "Max", age: 28},
      { name: "Manu", age: 29},
      { name: "Stephanie", age: 26}
    ],
    otherState: "some other value",
    showPersons: false
  })

  switchNameHandler = (newName) => {
    // !!DON'T DO THIS: this.state.person[0].name = "Maximilian"
    // console.log("Works!")
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28},
        { name: event.target.value, age: 29},
        { name: "Stephanie", age: 26}
      ]
    })
  }

  togglePersonsHandler = () => {
    const isShown = this.state.showPersons;
    this.setState({showPersons: !isShown})
  }


  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map(person => {
          return <Person name={person.name} age={person.age}/>
        })}
    </div>)
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!!!</p>
        <button onClick={this.togglePersonsHandler}>Show persons!</button>
        {persons}
      </div>
    );
  }
}
export default App;
