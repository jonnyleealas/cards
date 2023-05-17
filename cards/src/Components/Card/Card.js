import './card.css'
const Card = (props) => {
    return (

        <div className='card'>
            <p>{props.data.id}</p>
            <p>{props.data.title}</p>
            <p>{props.data.description}</p>
            <p>{props.data.googleMapsUrl}</p>
        </div>


    )
}


export default Card