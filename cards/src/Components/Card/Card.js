/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import './card.css'
import pin from '../pics/location-pin.png'
const Card = (props) => {
    return (

        <div className='card'>
            <div>
                <img className='picture' src={props.data.picture} alt='fuji' />
            </div>
            <div className='card-content' >
                <span className='pin-content'>
                    <img className='location-pin-icon' src={pin} atl='location pin' />
                    <span className='country'>{props.data.country}</span>
                    <div className='link'>

                    <a href={props.data.googleMapsUrl} target='_blank'>View on Google Maps</a>
                    </div>
                </span>
                <div className='title' >{props.data.title}</div>
                <div className='start-date' >{props.data.startDate}</div>
                <div className='description' >{props.data.description}</div>
            </div>

        </div>


    )
}


export default Card