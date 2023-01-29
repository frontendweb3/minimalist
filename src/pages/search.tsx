import React from 'react';
import Card from '@/components/Card/Card';
import Link from 'next/link';

function search() {
    return (
        <div className='container mx-auto my-12'>

            <form className='my-10'>
                
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                
                <div className="relative">

                    <input type="search" id="default-search" className="block w-full py-4 
                    pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Search the blog... " required={true} />

            
                    <Link href="/read/my-now-is" className="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Search Now</Link>

                    {/* className="text-center w-44 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  font-medium rounded-sm text-sm px-5 py-2.5 mr-2 my-3 dark:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700" */}

                </div>
            </form>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-5 justify-items-center mx-auto'>
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default search;