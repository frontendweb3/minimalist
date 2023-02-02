import React from 'react';
import Card from '@/components/Card/Card';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import _ from 'lodash';
import { AuthorPost,itemType} from '@/type';


function Author({posts,authorName}:{posts:AuthorPost,authorName:string[]}) {
    
    return (
        <>
            <div className='container mx-auto my-16'>

                <h1 className="mb-4 capitalize text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{authorName[0]} <span className="text-blue-600 dark:text-blue-500">{authorName[1]}</span></h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                    About the author is here, allways write unique for reader. 
                </p>
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

            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 justify-items-center mx-auto my-16'>
                {
                    posts.map((item:itemType)=><Card  key={item.id}  item={item} />)
                }
                
            </div>
        </>
    );
}

export default Author;


export async function getStaticPaths() {


    let paths: { params: { slug: string; }; }[] = []

    allPosts.map(
        item => paths.push({ params: { slug: item.author.trim().toLowerCase().replaceAll(" ","-") } })
    )
    return {
        paths: paths,
        fallback: false,
    }
}


export async function getStaticProps({ params }: {params:{slug:string}}) {

    let authorPost = _.filter(allPosts, function name(item) {

        return item.author.trim().toLowerCase().replaceAll(" ","-") === params.slug

    })

    return {
        props: { posts: authorPost, authorName:params.slug.split("-") },
    }
}
