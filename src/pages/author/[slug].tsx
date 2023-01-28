import React from 'react';
import Card from '@/components/Card/Card';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
function Author() {
    return (
        <>
            <div className='container mx-auto my-16'>

                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Joseph <span className="text-blue-600 dark:text-blue-500">Gonzalez</span></h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                <div className="my-3 flex-row flex md:flex">
                    <Link target="_blank" className="ml-3" href={'https://www.facebook.com/officialrajdeepsingh'}>
                        <FaFacebookF  />
                    </Link>
                    <Link target="_blank" className="mx-3"  href={'https://twitter.com/Official_R_deep'}>
                        <FaTwitter />
                    </Link>
                    <Link target="_blank" href={'https://www.linkedin.com/in/officalrajdeepsingh/'}>
                        <FaLinkedinIn />
                    </Link>
                 </div>
            </div>

            <h2 className="mx-auto container mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Published by</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 justify-items-center mx-auto'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}

export default Author;