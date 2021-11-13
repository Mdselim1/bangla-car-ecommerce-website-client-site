import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bmw from '../../img/brand/bmw.jpg';
import audi from '../../img/brand/audi.jpg';
import honda from '../../img/brand/honda.jpg';
import toyota from '../../img/brand/toyota.jpg';
import marcedes from '../../img/brand/marcedes.jpg';
import nissan from '../../img/brand/nissan.jpg';

const Brands = () => {
    return (
        <div className="py-5">
            <Container>
            <h1 className="text-center py-5 head-title text-dark">Our Products Brand</h1>
                <Row>
                    <Col lg={2} sm={12}>
                        <img src={bmw} className="img-fluid p-3" alt="" />
                    </Col>
                    <Col lg={2} sm={12}>
                        <img src={audi} className="img-fluid p-3" alt="" />
                    </Col>
                    <Col lg={2} sm={12}>
                        <img src={honda} className="img-fluid p-3" alt="" />
                    </Col>
                    <Col lg={2} sm={12}>
                        <img src={toyota} className="img-fluid p-3" alt="" />
                    </Col>
                    <Col lg={2} sm={12}>
                        <img src={marcedes} className="img-fluid p-3" alt="" />
                    </Col>
                    <Col lg={2} sm={12}>
                        <img src={nissan} className="img-fluid p-3" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Brands;