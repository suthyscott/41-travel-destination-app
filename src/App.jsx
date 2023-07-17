import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header'
import AddDestination from './AddDestination'
import axios from 'axios'

function App() {
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:4545/api/destinations?apiKey=${import.meta.env.VITE_APP_API_KEY}`)
      .then(res => setDestinations(res.data))
  }, [])

  console.log('hit App.jsx')
  
  return (
    <>
      <Header/>
    </>
  )
}

export default App
