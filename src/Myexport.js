import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Alerts from './components/Alerts';
import { useContext } from 'react';
import alertcontext from './context/Alerts/alertcontext';

import Notestate from './context/Notes/notestate';
import Login from './components/Login';
import Signup from './components/Signup';
function Myexport() {
    let { alert,showalert } = useContext(alertcontext);
    return (
        <div>
            <Notestate showalert={showalert} >
                <Navbar />
                <Alerts alert={alert} />
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route exact path='/about' element={<About />}></Route>
                    <Route exact path='/login' element={<Login/>}></Route>
                    <Route exact path='/signup' element={<Signup/>}></Route>
                </Routes>
            </Notestate>
        </div>
    )
}

export default Myexport
