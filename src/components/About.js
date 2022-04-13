import React, { useContext, useEffect } from 'react'
import alertcontext from '../context/Alerts/alertcontext'


function About() {
  let {showalert}=useContext(alertcontext);
  useEffect(()=>{
    showalert("success","hurry u did it")
  },[])
  return (
    <div>
      this is about 
    </div>
  )
}

export default About
