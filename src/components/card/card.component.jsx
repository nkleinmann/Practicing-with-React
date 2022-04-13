import './card.styles.css'

const Card = ({ monster }) => {
    const {id, name, email} = monster

    return(
        <div className='card-container' key={id}>
            {/* https://robohash.org/ */}
            <img alt={`moster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
    }

export default Card

// functional component
// import { Component } from 'react'

// import './card.styles.css'

// class Card extends Component {
//     render() {
//         const {id, name, email} = this.props.monster

//         return(
//             <div className='card-container' key={id}>
//                 {/* https://robohash.org/ */}
//                 <img alt={`moster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }

// }

// export default Card


// basic setup for class component
// import { Component } from 'readt'

// import './card.styles.css'

// class Card extends Component {
    // render() {

    //     return(
            
    //     )
    // }
    
// }

// export default Card