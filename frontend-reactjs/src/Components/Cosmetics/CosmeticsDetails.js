import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function CosmeticsDetails() {
    const {id}=useParams()
    const [details, setdetails] = useState([])
    useEffect(() => {
        fetch('http://localhost:2500/CosmeticProduct/'+ id)
            .then(data1 => data1.json())
            .then(data2 => setdetails(data2))
    })

    return (
        <>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={details.imageURL} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{details.name}</h5>
                                        <p className="card-text">{details.gender}</p>
                                        <p className="card-text">{details.category}</p>
                                        <p className="card-text">{details.items_left}</p>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
            
        </>
    );
}