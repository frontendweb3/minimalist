import React from 'react';
import Card from '@/components/Card/Card';

function ReadMorePost({posts}) {
    return (
            <div className="container my-10 mx-auto">

            <h1 className="mb-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white px-10"> Read more </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 justify-items-center mx-auto'>
                {
                  posts.map(item=> <Card item={item} />)
                }
            </div>

            </div>
    );
}

export default ReadMorePost;