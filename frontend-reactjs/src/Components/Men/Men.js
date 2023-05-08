import React, { useEffect, useState } from "react";
import './Men.css';

export function Men() {
    const [details, setdetails] = useState([])

    useEffect(() => {
        fetch('http://localhost:2500/MenProduct')
            .then(data1 => data1.json())
            .then(data2 => setdetails(data2))

    })
    return (
        <>
            <div className="backs">
                <h1 className="text-center tit">Mens Product</h1>
                {
                    details.map((value, index) => (
                        <>

                            <div className="card col-lg-2 text-center d-inline-flex m-3" >
                                <img src={value.imageURL} className="card-img-top " alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{value.name}</h5>
                                    <p className="card-text">{value.brand}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{value.gender}</li>
                                    <li className="list-group-item">{value.category}</li>
                                    <li className="list-group-item"> <p>₹</p>{value.price}</li>
                                    <li className="list-group-item"><p>Items Left</p>{value.items_left}</li>

                                </ul>
                                {/* <Link to ={`/MenDetails/${value.id}`}><input type = "button" value = "View Details" className="btn btn-secondary"/></Link> */}
                                <div className="">
                                    <button className="bg-dark text-white rounded-3">Add To Cart</button>
                                </div>
                            </div>

                        </>))
                }
            </div>
        </>
    );
}