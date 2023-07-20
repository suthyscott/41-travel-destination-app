import { useState, useEffect } from "react"
import "./App.css"
import Header from "./Header"
import AddDestination from "./AddDestination"
import DestinationCard from "./DestinationCard"
import axios from "axios"

function App() {
    const [destinations, setDestinations] = useState([])

    const getAllDestinations = () => {
        axios
            .get(
                `/api/destinations?apiKey=${
                    import.meta.env.VITE_APP_API_KEY
                }`
            )
            .then(res => setDestinations(res.data))
    }

    useEffect(() => {
        getAllDestinations()
    }, [])

    return (
        <>
            <Header />
            <div id="main-container">
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
                <section>
                    <AddDestination getAllDestinations={getAllDestinations}/>
                </section>
            </div>
        </>
    )
}

export default App
