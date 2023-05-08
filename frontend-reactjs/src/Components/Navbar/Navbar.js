import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import shopify from './Shopifypng.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';




export function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary  navbg ">
                <img src={shopify} alt="" className="logo-img col-lg-1 col-4" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center " id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='/Watches' className="nav-link clr text-white ">Watches</Link>
                        <Link to='/Women' className="nav-link clr text-white ">Women</Link>
                        <Link to='/Men' className="nav-link clr text-white ">Men</Link>
                        <Link to='/Kids' className="nav-link clr text-white ">Kids</Link>
                        <Link to='/Perfumes' className="nav-link clr text-white ">Perfumes</Link>
                        <Link to='/Cosmetics' className="nav-link clr text-white ">Cosmetics</Link>
                    </div>
                </div>
                <FontAwesomeIcon icon={faCartShopping} className="text-white p-4" />
                <FontAwesomeIcon icon={faUser} className="text-white p-4" />



            </nav>
        </>
    );
}














