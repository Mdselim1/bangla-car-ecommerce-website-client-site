import axios from "axios";
import React from "react";
import { Col } from "react-bootstrap";

const AllServiceSingle = ({ car, products, setProducts }) => {
  const HandleDeleteService = (id) => {
    console.log(id);
    const deletWant = window.confirm("Are You Sure You Want Delete");
    if (deletWant) {
      axios
        .delete(`https://bangla-car-server.up.railway.app/cars/${id}`)
        .then((result) => {
          if (result.data.deletedCount) {
            alert("Your Order Data Deleted Successfully");
            const remainservice = products.filter((user) => user._id !== id);
            setProducts(remainservice);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <Col lg={6}>
      <div className="mb-5 shadow-lg text-center single-product-box">
        <img
          className="img-fluid mb-4 rounded p-1 border-primary border"
          src={car?.img}
          alt=""
        />
        <h3>{car?.name}</h3>
        <h5>price : {car?.price} $</h5>
        <h4>Details</h4>
        <p>{car?.description}</p>
        <button
          className="common-button mt-4"
          onClick={() => HandleDeleteService(car?._id)}
        >
          Delete <i className="fas fa-trash-alt ms-3"></i>
        </button>
      </div>
    </Col>
  );
};

export default AllServiceSingle;
