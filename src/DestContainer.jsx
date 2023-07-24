import {useState, useEffect} from "react"
import DestinationCard from "./DestinationCard"
import axios from "axios"

const DestContainer = () => {
    const [destinations, setDestinations] = useState([])

    const getAllDestinations = async () => {
        try {
            let res = await axios.get(`/api/destinations?apiKey=${import.meta.env.VITE_APP_API_KEY}`)
            console.log(res)
            setDestinations(res.data)
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getAllDestinations()
    }, [])

    return (
        <main>
            {destinations.map(dest => {
                return (
                    <DestinationCard
                        name={dest.name}
                        imageURL={dest.imageURL}
                        notes={dest.notes}
                        international={dest.international}
                        id={dest.id}
                        key={dest.id}
                        getAllDestinations={getAllDestinations}
                    />
                )
            })}
        </main>
    )
}

export default DestContainer
