import './DestinationCard.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const DestinationCard = ({name, imageURL, notes, international, id, getAllDestinations}) => {
    const navigate = useNavigate()

    const deleteDestination = () => {
        axios.delete(`/api/destinations/${id}?apiKey=supersecureapikey`)
            .then(res => getAllDestinations())
            .catch(err => console.log(err))
    }

    return (
        <div className='dest-container'>
            <p>{name}</p>
            <p>{international}</p>
            <p>{notes}</p>
            <img src={imageURL}/>
            <button onClick={() => deleteDestination()}>Delete</button>
            <button onClick={() => navigate(`/details/${id}`)}>See more details</button>
        </div>
    )
}

export default DestinationCard