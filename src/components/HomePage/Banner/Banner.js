import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CarBanner from '../../img/banner/car-banner.svg';
import './Banner.css';

const Banner = () => {
    return (
        
        <div className="banner-main">
            <Container>
                <Row className="align-items-center">
                    <Col lg={7} sm={12}>
                        <div className="cars-text-main">
                        <h1 className="mt-5 mb-3">Welcome to bangla Cars</h1>
                        <h2 className="text-capitalize mb-3">The wind is not even close to us</h2>
                        <p>Regardless of your car business, let Divi take care of the online presence and help you win over new potential clients with its professionalism and sophistication. To take things a step further, you can also customize layouts to your needs and requirements with the integrated page builder.</p>
                        <Link to="/products" className="common-button text-decoration-none mt-4">Explore More <i className="fas fa-arrow-circle-right ms-2"></i></Link>
                        </div>
                    </Col>
                    <Col lg={5} sm={12}>
                        <img className="img-fluid banner-right-img" src={CarBanner} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
     
    );
};

export default Banner;