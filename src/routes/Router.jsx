import React, { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../pages/layaout/Layout'
import Crew from '../pages/crew/Crew'
import Destination from '../pages/destination/Destination'
import Technology from '../pages/technology/Technology'
import Home from '../pages/home/Home'


export const AppContext = createContext()

const Router = () => {
    return (
        <AppContext.Provider value={[]}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<Home />} />
                        <Route path="/destination:destinationName" element={<Destination />} />
                        <Route path="/crew:crewName" element={<Crew />} />
                        <Route path="/technology:technology" element={<Technology />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>)
}

export default Router