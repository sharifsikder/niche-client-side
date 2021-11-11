import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuht from '../../hooks/useAuth';
import "./Order.css";


const Order = () => {
    const {id} = useParams();
    const { user } = useAuht();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`http://localhost:7000/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    const onSubmit = data => {
        console.log(data)
        fetch(`http://localhost:7000/orders`, {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Order Processed Successfully')
                reset();
            }
        })
    
 }
    return (
       <>
        <div className="order-details text-center pt-3">
         
        <h1 className="mb-4 text-primary">Car Details</h1>
          
         <div className="details">
         <img className="rounded mb-2 pt-3 shadow" src={product?.img} alt="" />
          <h3 className=" mt-2 text-success">{product?.name}</h3>
          <h4 className=" mt-3 text-danger">{product?.price} </h4>
          <p className="w-50 mx-auto text-secondary pb-4 mb-5">{product?.discreption} </p>
         </div>
        </div>

        <div className="form-section  pt-3">
          <h1 className="text-center mb-4 text-success">Please Order</h1>
              <div className="">
             
            <form className="order-form" onSubmit={handleSubmit(onSubmit)}>

                <input className="py-2 px-3" defaultValue={user.displayName} {...register("name")} />

                <input className="py-2 px-3" defaultValue={user.email} {...register("email", { required: true })} />

                {errors.email && <span className="error">This field is required</span>}

                <input className="py-2 px-3" placeholder="Car Model" defaultValue="" {...register("carName")} />
                <input className="py-2 px-3" placeholder="Address" defaultValue="" {...register("address")} />              
                <input className="py-2 px-3" placeholder="phone number" defaultValue="" {...register("phone")} />

                <input type="submit" value="Place Order" />
            </form>
              </div>
        </div>
      </>  
    );
};

export default Order;