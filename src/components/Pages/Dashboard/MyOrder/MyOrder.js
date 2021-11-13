import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'react-bootstrap';
import useAuth from '../../../../context/useAuth';
import MyOrderSingle from './MyOrderSingle/MyOrderSingle';

const MyOrder = () => {

    const { user } = useAuth();

    const [cars, setCars] = useState([]);
    
    useEffect(() => {
        
        axios.get(`http://localhost:8000/order/?email=${user.email}`)
            .then(result => {
                setCars(result.data);
                console.log(result.data);
            });

    },[user.email])

    return (
        <div>
            <h1 className="text-center py-5 head-title">Your Order Products</h1>
            <Container fluid>
            <Row>
                {
                   cars.map(car=><MyOrderSingle key={car._id} car={car}></MyOrderSingle>)     
                }
            </Row>
            </Container>
        </div>
    );
};

export default MyOrder;