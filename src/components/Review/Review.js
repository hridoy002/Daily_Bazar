import React from 'react';

const Review = (props) => {
    const { name, thumbnailUrl,comment } = props.data;
    return (
        <div className='col'>
            <div className='md:max-w-sm m-10 bg-sky-200 text-lg text-black font-semibold rounded-md p-5'>
                <div className='flex'>
                    <img src={thumbnailUrl} className="w-8 rounded-lg " alt="" srcset="" />
                    <h2 className='pl-8'>{name}</h2>
                    
                </div>
                <p className='font-normal py-5'>Comment: {comment}</p>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bazar</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#online_shop</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#haat</span>
                </div>
            </div>

        </div>
    );
};

export default Review;