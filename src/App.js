import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state =
    {
      monsters: [],
      searchField: ''
    }

  };

  // componentDidMount is a LIFECYCLE METHOD.  LIFECYCLE METHODS are invoked at a specific time in the components life.
  // The code here gets called when our component mounts.
  componentDidMount() {
    // Use fetch to get data from api, convert to json, then set state of to component to the result
    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
      return response.json()
    }).then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })
  
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search monsters...' handleChange={this.handleChange} />
        {/* setState is an ASYNCRONUS EVENT. If we want to do something with our new state after it changes we need to pass a callback fucntion as the second argument in set state to do this!*/}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
