import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../context/useAuth';
import Product from './Product/Product';
import './Products.css';

const Products = () => {

    const {products ,loader} = useAuth();

    return (
        <div>
            {
                loader && <div className="text-center spinner">
                {
                    loader && <Spinner animation="border" variant="danger" />
                }
            </div>
            }
            <h1 className="text-center py-5 head-title">Our Latest Products</h1>
            <Container>
                <Row>
                    {
                        products.map(car=><Product key={car._id} product={car}></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;