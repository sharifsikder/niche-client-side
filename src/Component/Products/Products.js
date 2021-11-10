import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:7000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="products">

        <h1 className="text-center mt-3 text-success">Our Cars</h1>

       <div className="products-container">

     {
            products.map(product => <Product
                key = {product.id}
                product={product}

            ></Product>)
        }
       </div>

    </div>
    );
};

export default Products;