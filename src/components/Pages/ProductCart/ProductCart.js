import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ProductCart = () => {
    
    const { id } = useParams();
    const [car, setCar] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/cars/${id}`)
            .then(result => {
                setCar(result.data);
            })
    }, [id]);

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={6} sm={12}>
                        <div>
                            <img src={car?.img} className="img-fluid" alt="" />
                        </div>
                    </Col>
                    <Col lg={6} sm={12}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductCart;