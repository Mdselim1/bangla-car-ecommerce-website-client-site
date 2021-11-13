import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../../context/useAuth';
import AllServiceSingle from './AllServiceSingle/AllServiceSingle';

const AllService = () => {

    const { products ,setProducts} = useAuth();

    return (
        <div>
             <h1 className="text-center py-5 head-title">All Cars Products</h1>
            <Container fluid>
            <Row>
                {
                    products.map(data=> <AllServiceSingle key={data?._id} car={data} products={products} setProducts={setProducts}></AllServiceSingle>)   
                }
            </Row>
            </Container>
        </div>
    );
};

export default AllService;