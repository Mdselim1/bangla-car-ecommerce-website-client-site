import React from 'react';
import { Col } from 'react-bootstrap';

const MyOrderSingle = ({car}) => {
    return (
        <Col lg={6}>
            <div className="mb-5 shadow-lg text-center single-product-box">
                <img className="img-fluid mb-4 rounded p-1 border-primary border" src={car?.ordercar?.img} alt="" />
                <h3>{car?.ordercar?.name}</h3>
                <span>price : {car?.ordercar?.price } $</span>
                <h4>Detailes</h4>
                <p>{}</p>
                {/* <Link to={`/products/${}`} className="buy-now-btn text-decoration-none">Buy Now <i className="fas fa-shopping-cart ms-4"></i></Link> */}
            </div>
        </Col>
    );
};

export default MyOrderSingle;