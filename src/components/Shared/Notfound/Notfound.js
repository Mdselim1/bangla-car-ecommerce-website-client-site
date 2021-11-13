import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css';

const Notfound = () => {
    return (
        <div className="not-found-page text-center">
            
            <h1>4<span>0</span>4</h1>
            <p>This Page Not Found</p>
            <div className="text-center not-btn">
                        <Link className="buy-now-btn text-decoration-none not-found-btn" to="/home">Back To Home Page <i className="fas fa-arrow-right ms-3"></i></Link>
                        </div>
        
        </div>
    );
};

export default Notfound;