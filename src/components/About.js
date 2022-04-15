import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import alertcontext from '../context/Alerts/alertcontext'


function About() {
  let {showalert}=useContext(alertcontext);
  useEffect(()=>{
    if(!localStorage.getItem("token")){
    showalert("danger","please login first")
    }
  },[])
  let fun=async (token)=>{
    let response = await fetch("http://localhost:5055/api/user/getuser", {
      method: "GET",
      headers: {
        "Content-type": "application/json;",
        "token": token
      }
    })

    let data = await response.json()
    console.log(data);
    if (!data.success){
      showalert("danger","please login first")
      navigate("/login")
      return false
    }

  }
  let navigate=useNavigate();
  return (
    <div className='container'>
      {localStorage.getItem("token")?fun(localStorage.getItem("token"))&&
      <div>
      this is about</div> :
      navigate("/login")}
    </div>
  )
}

export default About
