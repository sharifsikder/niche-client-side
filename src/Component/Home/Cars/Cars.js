import React, { useEffect, useState } from 'react';

import Car from '../Car/Car';
import './Cars.css'

const Cars = () => {

    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])
    return (
        <div className="products">

        <h1 className="text-center mt-3 text-success">Our Cars</h1>

       <div className="products-container">

     {
            cars.slice(0,6).map(car => <Car
                key = {car.id}
                car={car}

            ></Car>)
        }
       </div>

    </div>
    );
};

export default Cars;