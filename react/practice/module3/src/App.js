import React, { Component } from 'react';

import './App.css';
import Useroutput from './components/Useroutput';
import Userinput from './components/Userinput';

class App extends Component {
  state = {
    username: 
    [{name: "Radu"},
  {name: "Ovidiu"},
  {name: "Octavian"}
]}

 changeNameHandler = (event) => {
  this.setState({
  username: 
  [{name: event.target.value},
  {name: event.target.value},
  {name: event.target.value}
  ]
} )
}
  render() {
    return (
      <div className="App">
        <Userinput changename={this.changeNameHandler}/>
        <Useroutput username={this.state.username[0].name}/>
        <Useroutput username={this.state.username[1].name}/>
        <Useroutput username={this.state.username[2].name}/>
      </div>
    );
  }
}

export default App;
