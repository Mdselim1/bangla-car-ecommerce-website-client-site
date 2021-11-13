import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'react-bootstrap';
import useAuth from '../../../../context/useAuth';
import MyOrderSingle from './MyOrderSingle/MyOrderSingle';

const MyOrder = () => {

    const { user } = useAuth();

    const [cars, setCars] = useState([]);
    
    useEffect(() => {
        
        axios.get(`https://dry-mesa-55750.herokuapp.com/order/email/?email=${user.email}`)
            .then(result => {
                setCars(result.data);
            });

    }, [user.email]);

    return (
        <div>
            <h1 className="text-center py-5 head-title">My Order Products</h1>
            <Container fluid>
            <Row>
                {
                   cars.map(car=><MyOrderSingle key={car._id} car={car} setCars={setCars} cars={cars}></MyOrderSingle>)     
                }
            </Row>
            </Container>
        </div>
    );
};

export default MyOrder;