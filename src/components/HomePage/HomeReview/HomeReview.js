import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ReviewHome from './ReviewHome/ReviewHome';

const HomeReview = () => {

    const [ reviews, setReviews ] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/review')
            .then(result => {
            setReviews(result.data);
            }).catch(error => {
            console.log(error.message);
        })
    },[])

    return (
        <div>
            <h1 className="text-center py-5 head-title">Our Customar Review</h1>
            <Container>
                <Row>
                    {
                      reviews.map(review=><ReviewHome key={review._id} review={review}></ReviewHome>)  
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HomeReview;