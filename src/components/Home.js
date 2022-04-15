import React, { useContext, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import alertcontext from '../context/Alerts/alertcontext';
import AddNote from './AddNote';

import Model from './Model';
import Notes from './Notes';
function Home() {
  let navigate = useNavigate();
  let {showalert}=useContext(alertcontext);
  useEffect( () => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    
  },[])
  return (
    
        <div className="container my-3">
          <Model />
          <AddNote />
          <hr />
          <Notes />
        </div>

  )
}

export default Home
