import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/useAuth';
import HomeProduct from './HomeProduct/HomeProduct';

const HomeProducts = () => {

    const {products } = useAuth();

    return (
        <div>
            <h1 className="text-center py-5 head-title">Our Latest Products</h1>
            <Container>
                <Row>
                    {
                        products.slice(0,6).map(car=><HomeProduct key={car._id} product={car}></HomeProduct>)
                    }
                </Row>
                
                <div className="text-center">
                <Link to="/products" className="common-button text-decoration-none mt-4">See More Products <i className="fas fa-arrow-circle-right ms-2"></i></Link>
                </div>
                        
            </Container>
        </div>
    );
};

export default HomeProducts;