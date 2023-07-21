import { useState } from "react"
import axios from "axios"

const AddDestination = ({getAllDestinations}) => {
    const [name, setName] = useState('Cool place')
    const [notes, setNotes] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [international, setInternational] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        axios.post(`/api/destinations?apiKey=${import.meta.env.VITE_APP_API_KEY}`, {name, notes, imageURL, international})
            .then(res => {
                getAllDestinations()
                setName('')
                setNotes('')
                setImageURL('')
                setInternational(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <form onSubmit={e => handleSubmit(e)} className="border-[3px] border-red-500 border-solid">
                <input placeholder="name" value={name} onChange={e => setName(e.target.value)} />
                <input placeholder="notes" value={notes} onChange={e => setNotes(e.target.value)} />
                <input type="checkbox" checked={international} onChange={() => setInternational(!international)}/>
                <input placeholder="Image URL" value={imageURL} onChange={e => setImageURL(e.target.value)} />
                <button>Submit</button>
            </form>
        </>
    )
}

export default AddDestination