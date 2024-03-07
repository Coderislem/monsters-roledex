import './card-ist-style.css'
import {Card} from '../cards/card.components'
export const CardList=(props)=>{

    return <div className="card-list">
        {props.Monsters.map((monster) =>(
          <Card key={monster.id} monster={monster} />
        ))}
    </div>
}