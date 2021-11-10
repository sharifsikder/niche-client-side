import { Button} from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Car.css'

const Car = (props) => {
    console.log(props)
    const{name, img, _id, price, discreption} = props.car;

    return (
        <div className="product">
        <Card  className="borders" style={{ width: '22rem' }}>
         <Card.Img variant="top" src={img} className="img"  />
         <Card.Body>
         <Card.Title className="card-tittle mt-3">{name}</Card.Title>
         <Card.Text>
         {discreption}
         <h3 className="mt-2 price">{price}</h3>
         </Card.Text>
         <Link to={`/order/${_id}`}>
         <Button className="mb-4 mt-2" variant="outline-success">Buy Now</Button></Link>
         </Card.Body>
         </Card>
    </div>
    );
};

export default Car;