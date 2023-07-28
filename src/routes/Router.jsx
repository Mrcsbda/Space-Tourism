import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../pages/layaout/Layout'
import Crew from '../pages/crew/Crew'
import Destination from '../pages/destination/Destination'
import Technology from '../pages/technology/Technology'
import Home from '../pages/home/Home'


export const AppContext = createContext()

const Router = () => {
    const [destinationPathName, setDestinationPathName] = useState("Moon")
    
    return (
        <AppContext.Provider value={
            {
                destinationPathName,
                setDestinationPathName
            }
        }>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<Home />} />
                        <Route path="destination/:destinationName" element={<Destination />} />
                        <Route path="crew/:crewName" element={<Crew />} />
                        <Route path="technology/:technologyName" element={<Technology />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>)
}

export default Router