import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../../Reviews/Reviews';

const Home = () => {
    return (
        <div class="grid grid-cols-2 gap-4 w-full">
            <div className='w-full '>
                <h1 className='text-5xl font-bold'>Fresh Processed Chiken</h1>

            </div>

            <div>
                <img src="/src/logo.svg" alt="" />
            </div>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    See Details
            </button>

        </div>
    );
};

export default Home;