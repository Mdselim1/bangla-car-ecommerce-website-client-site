import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {

    const {name,img,price,description ,_id} = product;

    return (
        <Col lg={4} sm={12}>
            <div className="mb-5 shadow-lg text-center single-product-box">
                <img className="img-fluid mb-4 rounded p-1 border-primary border" src={img} alt="" />
                <h3>{name}</h3>
                <span>price : {price} $</span>
                <h4>Detailes</h4>
                <p>{description}</p>
                <Link to={`/products/${_id}`} className="buy-now-btn text-decoration-none">Buy Now <i className="fas fa-shopping-cart ms-4"></i></Link>
            </div>
        </Col>
    );
};

export default Product;