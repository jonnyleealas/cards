import './card.css'
const Card = (props) => {
    return (

        <div className='card'>

            <img className='picture' src={props.data.picture} alt='fuji' />
            <div className='card-content' >
                <p>{props.data.id}</p>
                <p>{props.data.title}</p>
                <p>{props.data.description}</p>
                <p>{props.data.googleMapsUrl}</p>
            </div>
           
        </div>


    )
}


export default Card