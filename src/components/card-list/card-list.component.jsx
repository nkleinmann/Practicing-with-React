// functional component
import Card from '../card/card.component'
import './card-list.styles.css'

// example of implicit return
const CardList = ({ monsters }) => ( // destructuring monsters from prop array - props is first argument passed in
        <div className='card-list'>
            {monsters.map(monster =>  {                
                return (<Card monster={monster} />)
        })}
     </div>
)

export default CardList


// class component
// import { Component } from 'react'
// import './card-list.styles.css'
// import Card from '../card/card.component'

// class CardList extends Component {

//     render() {
//         // console.log(this.props)
//         const { monsters } = this.props

//         return(
            // <div className='card-list'>
            //     {monsters.map(monster =>  {                
            //         return (
            //             // <h1 key={monster.id}>{monster.name}</h1>
            //             <Card monster={monster} />
            //         )
            //     })}
            // </div>
//         )
//     }
// }

// export default CardList