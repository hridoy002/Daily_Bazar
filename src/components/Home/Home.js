import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <div class="grid grid-cols-2 gap-4 w-full">
                <div className='w-full '>
                    <h1 className='text-5xl font-bold'>Fresh Processed Chiken</h1>

                </div>

                <div>
                    <img src="../../image/product.jpg" class="max-w-full h-auto" alt="..." />
                </div>
            </div>

            <div className='my-28 '>
                <h2 className='text-4xl font-semibold'>Reviews</h2>
                <button component={<Reviews />} to='' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    See Details
                </button>
            </div>
        </div>
    );
};

export default Home;