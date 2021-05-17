import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = ({
    persons: [
      {id: "asfas", name: "Max", age: 28},
      {id: "sads", name: "Manu", age: 29},
      {id: "xvsv", name: "Stephanie", age: 26}
    ],
    otherState: "some other value",
    showPersons: false
  })

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
  
    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const isShown = this.state.showPersons;
    this.setState({showPersons: !isShown})
  }

  deletePersonsHandler = (indexPerson) => {
    const persons = [...this.state.persons];
    persons.splice(indexPerson, 1);
    this.setState({persons: persons})
  }

  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return <Person name={person.name} 
          age={person.age} 
          click={() => this.deletePersonsHandler(index)}
          key={person.id}
          changed={(event) => this.nameChangedHandler(event, person.id)}/>
        })}
    </div>)
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!!!</p>
        <button className="button" onClick={this.togglePersonsHandler}>Show persons!</button>
        {persons}
      </div>
    );
  }
}
export default App;