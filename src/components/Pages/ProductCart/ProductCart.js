import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../../../context/useAuth';

const ProductCart = () => {
    
    const { id } = useParams();
    const [car, setCar] = useState({});
    const { register, handleSubmit,reset} = useForm();

    const {user} = useAuth();

    useEffect(() => {
      
        axios.get(`http://localhost:8000/cars/${id}`)
            .then(result => {
                setCar(result.data);
            })
            .catch(error => {
            console.log(error);
            })
        
    }, [id]);

    const HandleOrderSubmit = data => {
        data.ordercar = car;
        console.log(data);
        axios.post('http://localhost:8000/order', data)
            .then(result => {
                if (result.data.insertedId) {
                    alert('Your Order Submitted Succesfully');
                    reset();
                }
            })
    };

    return (
        <div>
            <Container>
            <h1 className="text-center pt-5 head-title">Purchase Order</h1>
                <Row>
                    <Col lg={6} sm={12}>
                    <div className="my-5 shadow-lg text-center single-product-box">
                <img className="img-fluid mb-4 rounded p-1 border-primary border" src={car?.img} alt="" />
                <h3>{car?.name}</h3>
                            <h5>price : {car?.price} $</h5>
                            <h6 className="my-2"><strong>Rating : </strong> 
                    <Rating
                    readonly
                    initialRating={car?.rating}
                    emptySymbol="far fa-star text-warning"
                    fullSymbol="fas fa-star text-warning"
                ></Rating></h6>
                <h4>Detailes</h4>
                <p>{car?.description}</p>
            </div>
                    </Col>
                    <Col lg={6} sm={12}>
                    
                        <form className="input-form-box my-5" onSubmit={handleSubmit(HandleOrderSubmit)}>
                        <input type="text" defaultValue={user?.displayName} {...register('name')} />
                            <input type="email" defaultValue={user?.email} {...register('email')} />
                            <input type="number" placeholder="Enter your phone number"  {...register('phone')} />
                            <input type="text" placeholder="Enter your district name"  {...register('district')} />
                            <input type="text" placeholder="Enter your zip name"  {...register('zip')} />
                            <input type="text" placeholder="Enter your zip code"  {...register('zipcode')} />
                            <input type="submit" value="Purchase Order" />
                            </form> 
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductCart;