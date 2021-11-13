import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {

    const { register, handleSubmit } = useForm();
    
    const MakeAdmin = data => {
        console.log(data);
    };

    return (
        <div>
            <h1 className="text-center py-5 head-title">Make A Admin</h1>
            <div className="text-center">
            <form className="input-form-box w-25 mx-auto" onSubmit={handleSubmit(MakeAdmin)}>
                    <input className="make-admin-input" type="email" placeholder="Enter your admin email" {...register('email')} required /><br/>
                <input className="common-button mt-3" type="submit" value='Make Admin' />
            </form>
            </div>
        </div>
    );
};

export default MakeAdmin;