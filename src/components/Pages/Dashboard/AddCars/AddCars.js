import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './AddCars.css';

const AddCars = () => {

    const { register, handleSubmit, reset } = useForm();
    
    const history = useHistory();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:8000/cars', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Car Add successfully');
                    reset();
                    history.replace('/dashboard/allservice')
                }
            })  
    };
    
    

    return (
        <div className="pt-2 pb-5 add-service-form">
            <h1 className="text-center py-5 head-title">Add A Cars</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Enter your car model name" {...register("name")} />
      <input placeholder="Enter your car price" {...register("price")} />
      <input placeholder="Enter your product rating" {...register("rating")} />
                <input placeholder="Enter your car img url" {...register("img")} />
                <textarea placeholder="Enter your car details" {...register("description")} cols="10" rows="5"></textarea>
      <input type="submit" value="Add Car"/>
    </form>
        </div>
    );
};

export default AddCars;