import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuht from '../../hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {

   
  const [orders, setOrders] = useState([]);
  console.log(orders)

const {user} = useAuht()
    const email = user.email
   useEffect(() => {
       fetch(`http://localhost:7000/orders/${email}`)
       .then(res => res.json())
       .then(data => setOrders(data))
   }, []);

   
   const {isLoading} = useAuht();
   if(isLoading){
       return <Spinner animation="border" variant="danger" />
   }
 
   
   const handelDelete = (id) => {
 
    const url = `http://localhost:7000/orders/${id}`;
    fetch(url, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount){
            alert('Deleted')
            const remaining = orders.filter(order => order._id !== id);
            setOrders(remaining);
        }
    })
}


    return (
        <div>
           
            <h2 className="text-center text-success my-4">My Orders : {orders?.length}</h2>

            {
                orders.map(order =>  <div className="text-center orders"
                key={order._id}
                >
             
                     <div className="my-order">
                         <h5>Welcome {order.name}</h5>
                     <h5>Car Model : {order.carName}</h5>
                     <p><i class="fas fa-map-marked-alt"></i> {order.address}</p>
                     <p><i class="fas fa-phone-alt"></i> {order.phone}</p>
                     <button onClick={() => handelDelete(order._id)} type="button" class="btn btn-outline-warning mt-2">Delete</button>
                     <button type="button" class="btn btn-outline-info mt-2 ms-3">Pending</button>
                     </div>
                 
             
               
               
                
                </div>)
            }
        </div>
    );
};

export default MyOrders;