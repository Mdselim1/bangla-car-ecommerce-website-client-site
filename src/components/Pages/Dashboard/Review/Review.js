import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../context/useAuth';

const Review = () => {

    const { register, handleSubmit, reset } = useForm();

    const { user } = useAuth();

    const onSubmit = (data) => {
        data.email = user.email;
        axios.post('https://dry-mesa-55750.herokuapp.com/review', data)
            .then(result => {
                if (result.data.insertedId) {
                    alert('Review Sumited Successfully');
                    reset();
                }
            });
    };

    return (
        <div>
            <h1 className="text-center py-5 head-title">Give A Review</h1>
            <div className="pt-2 pb-5 add-service-form">
             <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Enter your name" defaultValue={user?.displayName} {...register("name")} />
       <input placeholder="Enter your rating out of 5" {...register("rating")} />
        <textarea placeholder="Write your messege in 50 words" {...register("description")} cols="10" rows="5"></textarea>
      <input type="submit" value="Submit Review"/>
    </form>
        </div>
        </div>
    );
};

export default Review;