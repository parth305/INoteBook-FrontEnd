import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import alertcontext from '../context/Alerts/alertcontext';
function Signup() {
    let [credentials, setcredentials] = useState({ username: "", email: "", password: "", cpassword: "" });
    let navigate = useNavigate();
    let { showalert } = useContext(alertcontext);
    let Change = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value });
    }
    let handlesubmit = async (event) => {
        event.preventDefault();

        if (credentials.password === credentials.cpassword) {
            let response = await fetch("http://localhost:5055/api/user/createuser", {
                method: "POST",
                body: JSON.stringify({ username: credentials.username, email: credentials.email, password: credentials.password }),
                headers: {
                    "Content-type": "application/json",
                }
            })
            let data = await response.json();
            if (data.success) {
                localStorage.setItem("token", data.token)
                navigate("/", { replace: true });
                showalert("success", "Signup successful")
            }
            else {
                showalert("danger", data.error)
            }
        } else {
            showalert("danger","confirme password does not match")
        }
    }
    return (
        <div className='container w-50 my-5'>
            <form onSubmit={handlesubmit}>
                <div className="mb-3 row">
                    <label htmlFor="username" className="col-sm-3 col-form-label">Username</label>
                    <div className="col-sm-4">
                        <input type="text" value={credentials.username} onChange={Change} className="form-control-plaintext mx-2" id="username" name="username" placeholder='Enter yor Username' />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-4">
                        <input type="email" value={credentials.email} onChange={Change} className="form-control-plaintext mx-2" id="email" name="email" placeholder='Enter yor email' />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="password" className="col-sm-3 col-form-label">Password</label>
                    <div className="col-sm-4">
                        <input type="password" value={credentials.password} onChange={Change} className="form-control-plaintext mx-2" id="password" name="password" placeholder='Enter yor password' />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="cPassword" className="col-sm-3 col-form-label">Confirme Password</label>
                    <div className="col-sm-4">
                        <input type="password" value={credentials.cpassword} onChange={Change} className="form-control-plaintext mx-2" id="cpassword" name="cpassword" placeholder='Confirme password' />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    )
}

export default Signup
