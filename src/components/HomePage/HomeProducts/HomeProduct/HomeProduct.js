import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const HomeProduct = ({product}) => {

    const {name,img,price,description ,_id, rating} = product;

    return (
       
             <Col lg={4} sm={12}>
            <div className="mb-5 shadow-lg text-center single-product-box">
                <img className="img-fluid mb-4 rounded p-1 border-primary border" src={img} alt="" />
                <h3>{name}</h3>
                <h5>price : {price} $</h5>
                <h6 className="my-2"><strong>Rating : </strong> 
                    <Rating
                    readonly
                    initialRating={rating}
                    emptySymbol="far fa-star text-warning"
                    fullSymbol="fas fa-star text-warning"
                ></Rating></h6>
                <h4>Detailes</h4>
                <p>{description.slice(0 ,141)}</p>
                <Link to={`/products/${_id}`} className="buy-now-btn text-decoration-none">Buy Now <i className="fas fa-shopping-cart ms-4"></i></Link>
            </div>
        </Col>
        
    );
};

export default HomeProduct;