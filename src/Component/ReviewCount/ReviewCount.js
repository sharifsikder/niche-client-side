import React, { useEffect, useState } from 'react';

const ReviewCount = () => {

    const [reviews, setReviews] = useState([]);
    console.log(reviews)
  
 
      
     useEffect(() => {
         fetch("https://radiant-sierra-09128.herokuapp.com/review")
         .then(res => res.json())
         .then(data => setReviews(data))
     }, []);
  
    return (
        <div>
           
            <h2 className="text-center text-success my-4">Total Review : {reviews?.length}</h2>

            {
                reviews.map(review =>  <div className="text-center orders"
                key={review._id}
                >
             
                     <div className="my-order">
                         <h4>{review.name} : </h4>
                     <h6>" {review.discreption}"</h6>  
                     </div>
                 
             
               
               
                
                </div>)
            }
        </div>
    );
};

export default ReviewCount;