import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';

const ReviewHome = ({ review }) => {
    
    return (
        <Col lg={4} sm={12}>
        <div className="mb-5 shadow-lg text-center single-product-box">
            <h3>{review?.name}</h3>
             <h6 className="my-2"><strong>Rating : </strong> 
                <Rating
                readonly
                initialRating={review?.rating}
                emptySymbol="far fa-star text-warning"
                fullSymbol="fas fa-star text-warning"
            ></Rating></h6>
            <h4>What Say </h4>
            <p>{review?.description}</p>
            
        </div>
    </Col>
    );
};

export default ReviewHome;