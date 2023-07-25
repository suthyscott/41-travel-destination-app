import { useState, useEffect } from "react"
import DestinationCard from "../Elements/DestinationCard"
import axios from "axios"

const Home = () => {
    const [destinations, setDestinations] = useState([])
    const [searchInput, setSearchInput] = useState("")

    const getAllDestinations = async () => {
        try {
            let res = await axios.get(
                `/api/destinations?apiKey=${import.meta.env.VITE_APP_API_KEY}`
            )
            console.log(res)
            setDestinations(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAllDestinations()
    }, [])

    return (
        <main>
            <div>
                <label>Search for destinations here:</label>
                <input
                    placeholder="Enter destination name"
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                />
            </div>
            {destinations
                .filter(dest => {
                    if (
                        dest.name
                            .toLowerCase()
                            .includes(searchInput.toLowerCase())
                    ) {
                        return dest
                    }
                })
                .map(dest => {
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

export default Home
