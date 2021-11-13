import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-box pt-5 pb-3">
            <Container>
                <Row>
                    <Col lg={3} sm={12}>
                        <div className="footer-main-box">
                            <h2 className="footer-head-title">Category</h2>
                            <ul className="footer-list">
                                <li>BMW</li>
                                <li>MARCEDES</li>
                                <li>HONDA</li>
                                <li>TOYOTA</li>
                                <li>Audi</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} sm={12}>
                        <div className="footer-main-box">
                            <h2 className="footer-head-title">Short Link</h2>
                            <ul className="footer-list">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/products">Products</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/login">Log In</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} sm={12}>
                        <div className="footer-main-box">
                            <h2 className="footer-head-title">Contact</h2>
                            <ul className="footer-list">
                                <li>
                                    Kolatoli , Dhaka - 1100
                                </li>
                                <li>
                                    Phone : +8801052856665
                                </li>
                                <li>
                                    Email : bangla@car.com
                                </li>

                                <li>
                                    Website : banglacar.com
                                </li>
                                
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} sm={12}>
                        <div className="footer-social-media">
                            <h2 className="footer-head-title">Social Link</h2>
                            <ul className="footer-contact">
                                <li>
                                <i className="fab fa-facebook-f"></i>
                                </li>
                                <li>
                                <i className="fab fa-instagram"></i>
                                </li>
                                <li>
                                <i className="fab fa-twitter"></i>
                                </li>

                                <li>
                                <i className="fab fa-youtube"></i>
                                </li>
                                <li>
                                <i className="fab fa-linkedin-in"></i>
                                </li>
                                
                            </ul>
                        </div>
                    </Col>
                </Row>
                <div className="footer-text text-center pt-3">
                    <p>&copy; All right reserved by BanglaCar || 2021</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;