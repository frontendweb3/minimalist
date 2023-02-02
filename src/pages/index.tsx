import React from 'react';
import { NextSeo } from 'next-seo';
import MainCard from '@/components/MainCard/MainCard';
import Card from '@/components/Card/Card';
import Pagination from "@/components/Pagination/Pagination"
import _ from 'lodash';
import { allPosts } from 'contentlayer/generated';
import { paginate } from '../../utility/utility';
import { IndexPage, Posts} from '@/type';

export default function Index({single,posts,pagination}:IndexPage) {


  return (
    <>
      <NextSeo
        title={" Minimalist - Template is a blog "}
        description={"The Minimalist template is a blog template built with nextjs and tailwind CSS. It provides a minimalist look for the reader and is made with modern technology, so you can easily extend and edit it."}
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
          posts.map(
            (item: Posts)=>{
              if (item.length !== 0) {

                return <Card item={item} key={item.title} />
                
              } 
            }
          )
        }

        
      </div>

      <Pagination pagination={pagination} />
    </>
  )
}



export async function getStaticProps() {

  let page_par_posts:number= process.env.PAGE_PAR_POSTS as unknown as number

  const posts =  _.slice(allPosts, 0, page_par_posts)

  let pagination = {
    page_par_posts:page_par_posts,
    pageCount: paginate()
  }

  return {
    props: { single: _.first(posts),  posts: _.drop(posts),pagination },
  }
}