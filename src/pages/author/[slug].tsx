import React from 'react';
import Card from '@/components/Card/Card';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import _ from 'lodash';
import { AuthorType } from '@/type';
import { allPosts, Post } from 'contentlayer/generated';


function Author({ posts, author }: { posts: Post[], author: AuthorType }) {

  return (
    <>
      <div className='container mx-auto my-16'>

        <h1 className="mb-4 capitalize text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{author?.firstName} <span className="text-blue-600 dark:text-blue-500">
          {author?.lastName}
        </span>
        </h1>

        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          About the author is here, allways write unique for reader.
        </p>
        <div className="my-3 flex-row flex md:flex">

          <Link target="_blank" className="ml-3" href={`${author.social?.facebook}`}>
            <FaFacebookF />
          </Link>

          <Link target="_blank" className="mx-3" href={`${author.social?.twitter}`}>
            <FaTwitter />
          </Link>

          <Link target="_blank" href={`${author.social?.linkedin}`}>
            <FaLinkedinIn />
          </Link>

        </div>
      </div>

      <h2 className="mx-auto container mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Published by {author?.firstName}</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 justify-items-center mx-auto my-16'>
        {
          posts.map(item => <Card key={item.id} item={item} />)
        }

      </div>
    </>
  );
}

export default Author;


export async function getStaticPaths() {

  let paths: { params: { slug: string } }[] = []

  allPosts.map(
    item => {
      if (item.author !== undefined) {
        paths.push(
          {
            params: {
              slug: item.author?.name.trim().toLowerCase().replaceAll(" ", "-")
            }
          }
        )
      }
    }
  )
  return {
    paths: paths,
    fallback: false,
  }
}


export async function getStaticProps({ params }: { params: { slug: string } }) {

  let author: AuthorType = {}

  let authorPost = _.filter(allPosts, (item) => {

    if (item.author?.name.trim().toLowerCase().replaceAll(" ", "-") === params.slug) {

      author = {
        firstName: item.author?.name.trim().split(" ")[0],
        lastName: item.author?.name.trim().split(" ")[1],
        job: item.author?.job,
        image: item.author?.image,
        social: item.author?.social,
      }

    }

    return item.author?.name.trim().toLowerCase().replaceAll(" ", "-") === params.slug
  })

  return {
    props: { posts: authorPost, author },
  }
}
