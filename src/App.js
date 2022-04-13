// import { Component } from 'react'
// above is for classes

// below is for hooks
import { useState, useEffect } from 'react'


import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css'

// basics of functional components
// const App = () => {

// }

const App = () => {

  const [searchField, setSearchField] = useState('a') // [value, setValue]
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters) // initial value is monsters
  // const [stringField, setStringField] = useState('') used to show that the second useEffect only fires when monsters or searchFile changes 
  console.log(searchField)

  console.log('render')

  // useEffect will run this call back function if dependencies change
  useEffect(()=>{
    console.log('effect fired')
    // code or the effect we want to happen
    fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => console.log(response))
    .then((response) => response.json())
    .then((users) => setMonsters(users))
    // infinite re-rendering was a problem without using useEffect to create a side effect - trigger from function and rely or change some value outside of scope of function, when using fetch need to use useEffect
  }, []) // the second argument is a dependency array - we are saying that the only time we should call useEffect function on mount (nothing should make us trigger this function again - if we did, then we would pass the array dependencies)

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })

    setFilteredMonsters(newFilteredMonsters)

    console.log('effect is firing')
  }, [monsters, searchField]) // run this method when ever monsters or searchField value changes

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }

  // const onStringChange = (event) => {
  //   setStringField(event.target.value)
  // }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      {/* <SearchBox onChangeHandler={onStringChange} placeholder='set string' /> */}
      <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  )

}
// class App extends Component {
//   constructor(){
//     super();
   
//     // https://jsonplaceholder.typicode.com/users - this is an api
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//     console.log('constructor')
//   }

//   // method gets run when component is mounted on page/to the DOM the first time, only happens one time unless unmounted and remounted
  // componentDidMount() {
  //   console.log('componentDidMount')
  //   // will fetch data and use promise to get response
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     // .then(response => console.log(response))
  //     .then((response) => response.json())
  //     .then((users) => this.setState(() => {
  //       return {monsters: users}
  //     },
  //     () => {
  //       console.log(this.state)
  //     }
  //     ))
  // }

  // onSearchChange = (event) => {
  //   // console.log({startingArray: this.state.monsters})
  //   // console.log(event.target.value)
  //   const searchField = event.target.value.toLowerCase()

  //   this.setState(() => {
  //     return { searchField }
  //   }, () => {
  //      // console.log({endingArray: this.state.monsters})
  //   })
  // }

//   render(){
//     console.log('render')

//     // destructuring - more readable optimization, and changing onSearchChange so anonymous function is no longer in code and requiring unecessary re-renders 
//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this
    // const filteredMonsters = monsters.filter((monster) => {
    //   return monster.name.toLowerCase().includes(searchField)
    // })
//     return (
//       <div className="App">
//         {/* {filteredMonsters.map((monster) => {
//           return (
//             <div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>
//           )
//         })} */}
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     )
//   }
// }

export default App;







