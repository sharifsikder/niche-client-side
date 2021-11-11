import React from 'react';
import axios from "axios";
import './Review.css'

import { useForm } from "react-hook-form";
import useAuht from '../../hooks/useAuth';

const Review = () => {
    const { register, reset, handleSubmit } = useForm();

const {user} = useAuht()

    const onSubmit = data => {
        console.log(data);

         axios.post('https://radiant-sierra-09128.herokuapp.com/review', data)
        .then(res => {
            if(res.data.insertedId){
                alert('added sucessfully')
                reset();
            }
        })
    }
    return (
        <div className="add-item">
        <h2 className="text-center text-white pt-5 mb-4">Please Review a Product </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input className="py-2 px-3" defaultValue={user.email} {...register("email", { required: true })} />
        <input defaultValue={user.displayName}  {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
        <textarea {...register("discreption")} placeholder="Descreption" />
       

       <input type="submit" />
</form>
    </div>
    );
};

export default Review;