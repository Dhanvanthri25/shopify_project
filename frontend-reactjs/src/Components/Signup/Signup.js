import React from "react";
import './Signup.css';
import { Link } from "react-router-dom";



export function Signup(){
   
    return(
        <>
        <div className="signupbg vh-100">
            <div className="position-absolute top-50 start-50 translate-middle row  border border-dark regborder">
                <h2 className="text-center">Register Here!</h2>
                <div className="col-lg-6">
                     <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">UserName</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                     </div>
                     <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">MobileNumber</label>
                        <input type="tel" className="form-control" id="exampleInputPassword1"/>
                     </div>
                     <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email"/>
                     </div>
                </div>
                <div className="col-lg-6">
                     <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Gender</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                     </div>
                     <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">City</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                     </div>
                     <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                     </div>
                </div>
                <p className="">By enrolling your MobileNumber,your consent to recieve automated security notification via text message from Shopify</p>
                 <div className="text-center">
                 <Link to = '/Login'> <button className="signup  " onClick={()=>{alert("User Created Successfully")}}>Submit</button></Link>
                </div>
            </div>
        </div>
        </>
    );
}