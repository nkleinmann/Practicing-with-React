import { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css'

class App extends Component {
  constructor(){
    super();
   
    // https://jsonplaceholder.typicode.com/users - this is an api
    this.state = {
      monsters: [],
      searchField: ''
    };
    console.log('constructor')
  }

  // method gets run when component is mounted on page/to the DOM the first time, only happens one time unless unmounted and remounted
  componentDidMount() {
    console.log('componentDidMount')
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

  onSearchChange = (event) => {
    // console.log({startingArray: this.state.monsters})
    // console.log(event.target.value)
    const searchField = event.target.value.toLowerCase()

    this.setState(() => {
      return { searchField }
    }, () => {
       // console.log({endingArray: this.state.monsters})
    })
  }

  render(){
    console.log('render')

    // destructuring - more readable optimization, and changing onSearchChange so anonymous function is no longer in code and requiring unecessary re-renders 
    const { monsters, searchField } = this.state
    const { onSearchChange } = this
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })
    return (
      <div className="App">
        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })} */}
        <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='search-box' />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;







