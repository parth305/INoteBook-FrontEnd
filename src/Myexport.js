import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Alerts from './components/Alerts';
import { useContext } from 'react';
import alertcontext from './context/Alerts/alertcontext';
function Myexport() {
    let {alert}=useContext(alertcontext);
    return (
        <div>
            <Navbar />
            <Alerts alert={alert}/>
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/about' element={<About />}></Route>
            </Routes>
        </div>
    )
}

export default Myexport
