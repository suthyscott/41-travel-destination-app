import { useState } from "react"
import axios from "axios"
import { Formik } from "formik"

const AddDestination = ({ getAllDestinations }) => {
    // const [name, setName] = useState('Cool place')
    // const [notes, setNotes] = useState('')
    // const [imageURL, setImageURL] = useState('')
    // const [international, setInternational] = useState(false)

    const initialValues = {
        name: "",
        notes: "",
        imageURL: "",
        international: false
    }

    const handleFormSubmit = values => {
        console.log(values)

        axios
            .post(
                `/api/destinations?apiKey=${import.meta.env.VITE_APP_API_KEY}`,
                values
            )
            .then(res => {
                // getAllDestinations()
                // setName("")
                // setNotes("")
                // setImageURL("")
                // setInternational(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
            {({ values, handleChange, handleSubmit }) => {
                return (
                    <form
                        onSubmit={handleSubmit}
                        className="border-[3px] border-red-500 border-solid"
                    >
                        <input
                            placeholder="name"
                            value={values.name}
                            onChange={handleChange}
                            name='name'
                        />
                        <input
                            placeholder="notes"
                            value={values.notes}
                            onChange={handleChange}
                            name='notes'
                        />
                        <input
                            type="checkbox"
                            checked={values.international}
                            value={values.international}
                            onChange={handleChange}
                            name="international"
                        />
                        <input
                            placeholder="Image URL"
                            value={values.imageURL}
                            onChange={handleChange}
                            name="imageURL"
                        />
                        <button>Submit</button>
                    </form>
                )
            }}
        </Formik>
    )
}

export default AddDestination
