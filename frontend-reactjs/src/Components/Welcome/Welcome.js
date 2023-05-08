import React from "react";
import './Welcome.css';
import Logo from './logo.png';
import { Link } from "react-router-dom";



export function Welcome(){
    return(
        <>
        <div className=" background vh-100">         
        <div className="position-absolute top-50 start-50 translate-middle border border-dark  wel">
            <p className="text-center">Welcome To Shopify<img src={Logo} alt="no_img" className="col-8 col-lg-1 col-md-1" /></p>
            <p className="text-center">"Shop Over Thousands Of Products In Shopify"</p>
            <p className="text-center">Create A Shopify Account <Link to='/Signup'> <button className="rounded-3 but">Signup</button></Link></p>
            <p className="text-center">Already A Shopify Customer <Link to ='/Login'> <button className="rounded-3 but">Login</button></Link></p>

        </div>
        </div>
        </>
    );
}

