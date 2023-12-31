import { useState, useEffect } from "react"
import "./App.css"
import Header from "./Elements/Header"
import AddDestination from "./Pages/AddDestination"
import Home from "./Pages/Home"
import DestDetails from "./Pages/DestDetails"

import {Routes, Route} from 'react-router-dom'

function App() {
   

    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/addDestination" element={<AddDestination/>}/>
                <Route path="/details/:destId" element={<DestDetails/>}/>
            </Routes>
            
        </>
    )
}

export default App
