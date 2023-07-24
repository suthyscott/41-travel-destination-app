import { useState, useEffect } from "react"
import "./App.css"
import Header from "./Header"
import AddDestination from "./AddDestination"
import DestinationCard from "./DestinationCard"
import DestContainer from "./DestContainer"

import {Routes, Route} from 'react-router-dom'

function App() {
   

    return (
        <>
            <Header />
            <Routes>
                <Route index element={<DestContainer/>}/>
                <Route path="/addDestination" element={<AddDestination/>}/>
            </Routes>
            
        </>
    )
}

export default App
