import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import alertcontext from '../context/Alerts/alertcontext';
function Login() {
    let [credentials, setcredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();
    let {showalert}=useContext(alertcontext);
    let handlesubmit = async (event) => {
        event.preventDefault();

        let response = await fetch("http://localhost:5055/api/user/login", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
                "Content-type": "application/json",
            }
        })
        let data = await response.json();
        if (data.success) {
            localStorage.setItem("token", data.token)
            navigate("/", { replace: true });
            showalert("success","Login successful")
        }
        else {
            showalert("danger",data.error)
        }

    }
    let Change = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value });
    }
    return (
        <div className='container w-50 my-5'>
            <form onSubmit={handlesubmit}>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" value={credentials.email} onChange={Change} className="form-control-plaintext mx-2" id="email" name="email" placeholder='Enter yor email' />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" value={credentials.password} onChange={Change} className="form-control-plaintext mx-2" id="password" name="password" placeholder='Enter yor password' />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login
