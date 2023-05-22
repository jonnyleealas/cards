import './card.css'
import pin from '../pics/location-pin.png'
const Card = (props) => {
    return (

        <div className='card'>

            <img className='picture' src={props.data.picture} alt='fuji' />
            <div className='card-content' >
                <img className='location-pin' src={pin} atl='location pin' />
                <p>{props.data.googleMapsUrl}</p>
                <p>{props.data.id}</p>
                <p>{props.data.title}</p>
                <p>{props.data.description}</p>
            </div>
           
        </div>


    )
}


export default Card