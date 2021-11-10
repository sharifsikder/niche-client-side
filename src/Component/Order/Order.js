import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Order = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`http://localhost:7000/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <div className="order-details text-center pt-3">
         
        <h1 className="mb-4 text-primary">Car Details</h1>
          
         <div className="details">
         <img className="rounded mb-2 pt-3 shadow" src={product?.img} alt="" />
          <h3 className=" mt-2 text-success">{product?.name}</h3>
          <h4 className=" mt-3 text-danger">{product?.price} </h4>
          <p className="w-50 mx-auto text-secondary pb-4 mb-5">{product?.discreption} </p>
         </div>
        </div>
    );
};

export default Order;