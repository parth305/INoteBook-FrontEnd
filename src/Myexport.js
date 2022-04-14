import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Alerts from './components/Alerts';
import { useContext } from 'react';
import alertcontext from './context/Alerts/alertcontext';

import Notestate from './context/Notes/notestate';
function Myexport() {
    let {alert}=useContext(alertcontext);
    return (
        <div>
            
      {/* <Notestate > */}
            <Navbar />
            <Alerts alert={alert}/>
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/about' element={<About />}></Route>
            </Routes>
            {/* </Notestate> */}
        </div>
    )
}

export default Myexport
