import React from 'react';

const AboutUs = () => {
    return (

        <div>
            <h1 className='text-4xl font-semibold mt-5'>About Us</h1>

            <div className='m-10 bg-sky-200 text-lg text-black font-semibold rounded-md p-5'>
                <h2>We are Daily Bazar!!!</h2>
                <p>A online grocery Shop.We sell all types of fresh vagetable,meat,fish and many other necessary goods.We provide home delivery service.All over the Dhaka City.</p>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bazar</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#online_shop</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#haat</span>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;