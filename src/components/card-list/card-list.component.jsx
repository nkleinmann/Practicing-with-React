import { Component } from 'react'
import './card-list.styles.css'
import Card from '../card/card.component'

class CardList extends Component {

    render() {
        // console.log(this.props)
        const { monsters } = this.props

        return(
            <div className='card-list'>
                {monsters.map(monster =>  {                
                    return (
                        // <h1 key={monster.id}>{monster.name}</h1>
                        <Card monster={monster} />
                    )
                })}
            </div>
        )
    }
}

export default CardList