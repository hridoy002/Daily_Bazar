import React from 'react';

const Blogs = () => {
    return (
        <div className='grid place-items-center'>
            <h3 className='text-3xl font-semibold mt-8'>Blogs</h3>
            <div class="w-3/4  overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 my-5">What is purpose of Context Api?</div>
                            <p class="text-gray-700 font-semibold text-base">
                                Context api help to a React app to provide global variables that can be passed around.It helps a React app more effiecient and easy to use.Context Api is a alternative of props drilling from grandparent to child.
                            
                            </p>
                    </div>
            </div>
            <div class="w-3/4  overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 my-5">What is semantic element?</div>
                            <p class="text-gray-700 font-semibold text-base">
                                Semantic element or tag is a html element.A semantic element describe clearly about its meaning.To see a Semantic tag browser or Developer both are easily understand ,Why it has been used.There are some semantic elements example:["header","main","form","table",] .They  can be used to define different parts of a web page.
                            </p>
                    </div>
            </div>
            <div class="w-3/4  overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 my-5">What is semantic element?</div>
                            <p class="text-gray-700 font-semibold text-base">
                                Semantic element or tag is a html element.A semantic element describe clearly about its meaning.To see a Semantic tag browser or Developer both are easily understand ,Why it has been used.There are some semantic elements example:["header","main","form","table",] .They  can be used to define different parts of a web page.
                            </p>
                    </div>
            </div>
        </div>
    );
};

export default Blogs;