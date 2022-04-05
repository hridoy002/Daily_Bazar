import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Reviews from '../../Reviews/Reviews';
import HomeReview from '../HomeReview/HomeReview';
import Review from '../Review/Review';

const Home = () => {

    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    const shortReviews = reviews.slice(0,3);


    const navigate = useNavigate();
    const reviewDetails =() =>{
        navigate("/reviews");
    
    }
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 w-full">
                <div className='w-full '>
                    <h1 className='text-5xl font-bold'>Fresh Processed Chiken</h1>
                    <h2 className='my-12 text-4xl font-bold text-cyan-500'>We assured your comfortable life</h2>
                    <p className='text-lg text-slate-400 text-justify pl-24'>Our fresh Skinless Chicken make a tender, juicy, and delicious mealtime centerpiece. Cook them on the stove, on the grill, or in the oven. Then, get creative. Use them in a pita sandwich for a homemade Chicken Shawarma, or chop them up to enhance your favorite lunch salad.</p>
                    <p className='text-lg text-slate-400 text-justify pl-24 mt-5'>
                        Our tender chicken breasts are minimally processed with no artificial ingredients and no antibiotics ever. With only 110 calories per serving, they’re a nutritious mealtime staple you can feel good about.

                        -    100% all-natural, minimal processed chicken with no artificial ingredients
                        -    23 grams of protein and 0 grams of trans fat per serving
                        -    No antibiotics ever
                        -    Perfect for baking, grilling, or sautéing
                        -    Delicious fresh taste
                        -    Farm raised chicken of the highest quality
                    </p>

                </div>

                <div>
                    <img src="../../image/product.jpg" class="max-w-full h-auto" alt="..." />
                </div>
            </div>

            <div className='my-28 '>
                <h2 className='text-4xl font-semibold'>Reviews</h2>
                {shortReviews.map(review => <HomeReview key={review.id} data={review}></HomeReview>)}
                <button onClick={reviewDetails} to='' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    See Details
                </button>
            </div>
        </div>
    );
};

export default Home;