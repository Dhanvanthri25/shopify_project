import React from "react";
import './Login.css';
import { Link } from "react-router-dom";


export function Login() {
    return (
        <>
        <div className="login vh-100">
            <div className="position-absolute top-50 start-50 translate-middle border border-dark logborder ">
                <form>
                    <h1 className="">Login Here!</h1>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">UserName</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text text-dark">Please Fillout this field*</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                     </div>
                </form>
                <Link to = '/Watches'><button className="loginbut" onClick={()=>{alert("Login Success!  Enjoy Shoping!")}}>Login</button></Link>
            </div>
        </div>
        </>
    );
}