import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuht from '../../hooks/useAuth';
import './AllOrders.css'

const AllOrders = () => {
   
    const [users, setUsers] = useState([]);

    useEffect( () => {

        fetch('http://localhost:7000/orders')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []) 

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
                const remaining = users.filter(user => user._id !== id);
                setUsers(remaining);
            }
        })
    }
    const {isLoading} = useAuht();
    if(isLoading){
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div>
            
            <h1 className="text-center mt-4 text-success mb-4"> All Orders  : {users.length}  </h1>

            {
                users.map(user =>
               <div className="text-center orders"
               key={user._id}
               >
            
                    <div className="all-order">
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                    <h5>Food Name : {user.foodName}</h5>
                    <p><i class="fas fa-map-marked-alt"></i> {user.address}</p>               
                    <button onClick={() => handelDelete(user._id)} type="button" class="btn btn-outline-warning mt-2">Delete</button>

                    <button type="button" class="btn btn-danger ms-3 mt-2">Approved</button>
                    </div>
               </div>
               )
            }
        </div>
    );
};

export default AllOrders;