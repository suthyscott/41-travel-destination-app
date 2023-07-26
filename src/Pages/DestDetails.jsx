import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DestDetails = () => {
    const params = useParams()
    const [destination, setDestination] = useState({})
    
    const getSingleDestination = () => {
        axios.get(`/api/destination/${params.destId}?apiKey=supersecureapikey`)
            .then(res => setDestination(res.data))
            .catch(err => console.log(err))
    }

    useEffect(getSingleDestination, [])

    console.log(destination)
  return (
    <div>DestDetails</div>
  )
}

export default DestDetails