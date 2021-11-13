import axios from 'axios';
import React from 'react';
import { Col } from 'react-bootstrap';

const ManageSingleOrder = ({ car, orders, setOrders }) => {
    
    const HandleDeleteOrder = id => {
        const deletWant = window.confirm('Are You Sure You Want Delete');
        if (deletWant) {
            axios.delete(`https://dry-mesa-55750.herokuapp.com/order/${id}`)
            .then(result => {
                if (result.data.deletedCount) {
                    alert('Your Order Data Deleted Successfully');
                    const remainservice = orders.filter(user => user._id !== id);
                    setOrders(remainservice);
                }
            })
                .catch(error => {
                console.log(error.message);
            })
        };
    };

    return (
        <Col lg={6} sm={12}>
        <div className="mb-5 shadow-lg text-center single-product-box">
            <img className="img-fluid mb-4 rounded p-1 border-primary border" src={car?.ordercar?.img} alt="" />
            <h3>{car?.ordercar?.name}</h3>
            <h5>price : {car?.ordercar?.price } $</h5>
            <h4>Address</h4>
            <p>Email : {car?.email}</p>
            <p>Phone : {car?.phone}</p>
            <p>Zip : {car?.zip}</p>
            <p>District : {car?.district}</p>
            <button className="common-button mt-4" onClick={()=>HandleDeleteOrder(car?._id)}>
                Delete <i className="fas fa-trash-alt ms-3"></i>
            </button>
        </div>
    </Col>
    );
};

export default ManageSingleOrder;