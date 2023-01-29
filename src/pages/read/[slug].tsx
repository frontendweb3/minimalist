import React from 'react';
import Link from 'next/link';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Card from '@/components/Card/Card';
import { allPosts } from 'contentlayer/generated';
import _ from 'lodash';
import dayjs from "dayjs";


function Read({post}) {


    return (
        <>
            <main className="my-16 pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">

                <div className="flex flex-col justify-between px-4 mx-auto max-w-screen-xl">

                    <div style={{ backgroundImage: `url(${post.image})` }} className="rounded-t-lg bg-fixed h-[650px] w-full bg-origin-content  bg-cover bg-no-repeat p-2"></div>

                    <article className="my-12 prose lg:prose-xl w-full mx-auto max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">


                        <h1 style={{ margin: "0px" }} className="prose-h1:my-0 text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl dark:text-white">{post.title}</h1>

                        <p style={{ margin: "0px" }} className="text-1xl font-extrabold leading-tight text-gray-500 lg:text-xl dark:text-white">{post.description}</p>

                        <address className="flex items-center mb-6 not-italic">

                            <div className="inline-flex items-center text-sm text-gray-900 dark:text-white">

                                <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />

                                <div className="flex flex-col">

                                    <Link href="/author/jese-leos" rel="author" className="text-xl font-bold no-underline text-gray-900 dark:text-white">
                                       {post.author}
                                    </Link>

                                    <div className="flex flex-col md:flex-row ">
                                        <p style={{ margin: "0px" }} className="text-base font-light text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>

                                        <p style={{ "margin": "0px" }} className="ml-3 text-base font-light text-gray-500 dark:text-gray-400">
                                            <time className="ml-0 md:ml-2" dateTime="2022-02-08" title="February 8th, 2022">
                                            { dayjs(post.date).format("MMM DD, YYYY")}
                                            </time>
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </address>

                        <div dangerouslySetInnerHTML={{__html: post.body.html}}>
                        </div>

                    </article>

                </div>


            </main>

            <div className='mx-auto w-full my-12'>

                <ul className='flex flex-col items-center md:flex-row justify-center md:justify-between'>

                    <li className='bg-white flex flex-row py-4 px-5 items-center'>

                        <BsArrowLeft className="mr-1" /> Previous :

                        <Link href="/">
                            How to install bun in debian distros?
                        </Link>

                    </li>

                    <li className="bg-white mt-8 md:mt-0 flex flex-row py-4 px-5 items-center">
                            Next :
                        <Link href="/">
                            How to Record sound in Ubuntu?
                        </Link>

                        <BsArrowRight className="ml-1" />
                    </li>

                </ul>
            </div>


            <div className="container my-10 mx-auto">

                <h1 className="mb-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white px-10"> Read more </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 justify-items-center mx-auto'>
                    <Card />
                    <Card />
                    <Card />
                </div>

            </div>
        </>
    );
}

export default Read;

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {


    let paths: { params: { slug: string; }; }[] = []

    allPosts.map(
        item => paths.push({ params: { slug: item.slug } })
    )
    return {
      paths: paths ,
      fallback: false,
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps({params}: any) {

    // params: { slug: '5-reasons-why-you-shouldn-t-learn-photography-on-your-own' },

    let post= _.filter(allPosts,function name(item) {
        return item.slug === params.slug
    })
    return {
      props: { post:post[0] },
    }
  }
