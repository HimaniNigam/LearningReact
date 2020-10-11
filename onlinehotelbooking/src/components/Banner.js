import React from 'react'
import { Link } from 'react-router-dom';
export default function Banner({ children , title , subtitle  }) {
    return (
        <div className="banner">
             <Link to="/about" className="btn btn-outline-primary btn-block ">About</Link>
             <Link to="/contact" className="btn btn-outline-primary btn-block ">Contact us</Link>
             <Link to="/offers" className="btn btn-outline-primary btn-block ">Offers</Link>
            <h1>{title}</h1>  
            <div/>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}
