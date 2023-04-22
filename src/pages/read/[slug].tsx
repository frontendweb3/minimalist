import React from 'react';
import Link from 'next/link';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { allPosts } from 'contentlayer/generated';
import _ from 'lodash';
import dayjs from "dayjs";
import ReadMorePost from '@/components/ReadMorePost/ReadMorePost'
import Image from 'next/image';
import type { Post } from 'contentlayer/generated';

function Read({ post, authorPosts, pagination }: { post: Post; authorPosts: Post[]; pagination: { next: Post; prev: Post; } }) {


  return (
    <>
      <main className="my-16 pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">

        <div className="flex flex-col justify-between px-4 mx-auto max-w-screen-xl">

          <Image src={post?.image} alt={post.title} height={650} width={1224} className="rounded-t-lg bg-fixed h-[650px] w-full bg-origin-content  bg-cover bg-no-repeat p-2" />

          <article className="my-12 prose lg:prose-xl dark:prose-invert w-full mx-auto max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">


            <h1 style={{ margin: "0px" }} className="prose-h1:my-0 text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl dark:text-white">{post.title}</h1>

            <p style={{ margin: "0px" }} className="text-1xl font-extrabold leading-tight text-gray-500 lg:text-xl dark:text-white">{post.description}</p>

            <address className="flex items-center mb-6 not-italic">

              <div className="inline-flex items-center text-sm text-gray-900 dark:text-white">

                {
                  post.author !== undefined ? <Image width={'64'} height={'64'} className="mr-4 w-16 h-16 rounded-full" src={post?.author.image} alt={post?.author.name} /> : " "
                }

                <div className="flex flex-col">

                  <Link href={`/author/${post.author?.name.trim().toLowerCase().replaceAll(" ", "-")}`} rel="author" className="text-xl font-bold no-underline text-gray-900 dark:text-white">
                    {post.author?.name}
                  </Link>

                  <div className="flex flex-col md:flex-row ">
                    <p style={{ "margin": "0px" }} className="ml-3 text-base font-light text-gray-500 dark:text-gray-400">
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        {dayjs(post.date).format("MMM DD, YYYY")}
                      </time>
                    </p>
                  </div>

                </div>

              </div>

            </address>

            <div dangerouslySetInnerHTML={{ __html: post.body.html }}>
            </div>

          </article>

        </div>


      </main>

      <div className='mx-auto w-full my-12'>

        <ul className='flex flex-col items-center md:flex-row justify-center md:justify-between'>

          {
            pagination.prev !== null ? <>
              <li className='bg-white text-black dark:bg-gray-700 dark:text-white flex flex-row py-4 px-5 items-center'>
                <BsArrowLeft className="mr-1" />
                Previous :
                <Link href={pagination.prev.slug}>
                  {pagination.prev.title}
                </Link>
              </li>
            </> : ''
          }

          {
            pagination.next !== null ? <>
              <li className="bg-white text-black dark:bg-gray-700 dark:text-white mt-8 md:mt-0 flex flex-row py-4 px-5 items-center">
                Next :
                <Link href={pagination.next.slug}>
                  {pagination.next.title}
                </Link>
                <BsArrowRight className="ml-1" />
              </li>
            </> : ""
          }

        </ul>
      </div>

      {
        authorPosts ? <ReadMorePost posts={authorPosts} /> : ""
      }

    </>
  );
}

export default Read;


export async function getStaticPaths() {


  let paths: { params: { slug: string; }; }[] = []

  allPosts.map(
    item => {
      paths.push({ params: { slug: item.slug } })
    }
  )
  return {
    paths: paths,
    fallback: false,
  }
}


export async function getStaticProps({ params }: { params: { slug: string } }) {

  const getPaginationIndex = allPosts.findIndex((element) => element.slug === params.slug);


  const pagination = {
    next: allPosts[getPaginationIndex + 1] === undefined ? null : allPosts[getPaginationIndex + 1],
    prev: getPaginationIndex === 0 ? null : allPosts[getPaginationIndex - 1]
  }

  let post = _.filter(allPosts, (item) => {

    return item.slug === params.slug

  })

  let authorPost = _.filter(allPosts, (item) => {

    return item.author === post[0].author

  })

  return {
    props: { post: post[0], authorPost, pagination },
  }
}
