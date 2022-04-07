import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
   
    // https://jsonplaceholder.typicode.com/users - this is an api
    this.state = {
      monsters: [],
    };
  }

  // method gets run when component is mounted on page/to the DOM the first time, only happens one time unless unmounted and remounted
  componentDidMount() {
    // will fetch data and use promise to get response
    fetch('https://jsonplaceholder.typicode.com/users')
      // .then(response => console.log(response))
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      },
      () => {
        console.log(this.state)
      }
      ))
  }

  render(){
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    )
  }
}

export default App;







