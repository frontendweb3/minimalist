import React from 'react';
import { NextSeo } from 'next-seo';
import MainCard from '@/components/MainCard/MainCard';
import Card from '@/components/Card/Card';
import Pagination from "@/components/Pagination/Pagination"
import _ from 'lodash';
import { allPosts } from 'contentlayer/generated';
import type { Post } from 'contentlayer/generated';
import { paginateUtility, paginate, PAGE_PAR_POSTS } from '../../../utility/utility';
import { useRouter } from 'next/router';
export default function Index({ single, posts, pagination }: { single: Post; posts: Post[]; pagination: { page_par_posts: number; pageCount: string[]; } }) {
  const router = useRouter()
  return (
    <>

      <NextSeo
        title={`Minimalist index page is ${router.query.number}`}
        description={"pagination page is from minimalist template"}
        canonical="https://www.rajdeepsingh.dev/"
        openGraph={{
          url: 'https://www.rajdeepsingh.dev/',
          title: "Minimalist -Template is a blog",
          description: "The Minimalist template is a blog template built with nextjs and tailwind CSS. It provides a minimalist look for the reader and is made with modern technology, so you can easily extend and edit it.",
          images: [{
            url: "logo",
            alt: "Rajdeep Singh --Learn With Me",
          }
          ],
          site_name: 'Rajdeep Singh',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <MainCard item={single} />

      <h2 className="container text-4xl font-bold tracking-tight text-gray-900 dark:text-white my-10">All Article -</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-5 justify-items-center mx-auto'>

        {
          posts.map((item) => <Card item={item} key={item.id} />)
        }


      </div>

      <Pagination pagination={pagination} />

    </>
  )
}


// fetch all posts 
export async function getStaticProps({ params }: { params: { number: string; }; }) {

  let totalPosts;

  if (Number(params.number) == 1) {
    totalPosts = _.slice(allPosts, 0, PAGE_PAR_POSTS)
  }


  if (Number(params.number) == 2) {
    totalPosts = _.slice(allPosts, PAGE_PAR_POSTS, PAGE_PAR_POSTS * Number(params.number))
  }


  if (Number(params.number) > 2) {
    totalPosts = _.slice(
      allPosts, PAGE_PAR_POSTS * Number(params.number) - PAGE_PAR_POSTS,
      PAGE_PAR_POSTS * Number(params.number)
    )
  }

  let pagination = {
    pageCount: paginate()
  }

  return {
    props: { single: _.first(totalPosts), posts: _.drop(totalPosts), pagination },
  }

}
export async function getStaticPaths() {

  return {
    paths: _.drop(paginateUtility()),
    fallback: false,
  }


}
