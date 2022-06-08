import React, { useEffect, useState } from 'react';
import Review from '../components/Review/Review';


const Reviews = () => {
   const [reviews,setReviews] = useState([])
   useEffect(()=>{
       fetch(`data.json`)
       .then(res => res.json())
       .then(data => setReviews(data))
   },[])
    return (
        <div className='row align-items-start'>
            {
                reviews.map(review => <Review key={review.id} data={review}></Review>)
            }
            
        </div>
    );
};

export default Reviews;