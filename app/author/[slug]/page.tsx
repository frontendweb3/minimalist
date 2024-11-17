import React from 'react';
import { Card } from '@/components/Card/Card';
import _ from 'lodash';
import { allPosts, Post } from 'contentlayer/generated';
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return { title: `Published by ${slug?.trim().replaceAll(" ", "-")}` }
}


export async function generateStaticParams() {

  let paths: { slug: string }[] = []

  allPosts.map(
    item => {
      if (item.author !== undefined) {
        paths.push({ slug: item.author?.name.trim().toLowerCase().replaceAll(" ", "-") })
      }
    }
  )

  const RemoveDuplicateAuthor = paths.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.slug === value.slug
    ))
  )
  return RemoveDuplicateAuthor
}
export default async function Page({ params }: {  params: Promise<{ slug: string }> }){

  const slug = (await params).slug

  const AuthorPosts: Post[] = allPosts.filter((post) => {
    if (post.author !== undefined) {
      if (post.author?.name.trim().toLowerCase().replaceAll(" ", "-") === slug) return post
    }
  })

  if (AuthorPosts.length === 0) throw new Error(`Author not found for slug: ${slug}`)


  return (
    <section className="py-32">
      <div className="container flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <h2 className="mb-3 text-pretty text-3xl capitalize font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {slug.replaceAll("-", " ")}
          </h2>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {AuthorPosts.map((item) => <Card key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}



//export async function getStaticPaths() {
//

//}
//

//export async function getStaticProps({ params }: { params: { slug: string } }) {
//
//  let author: AuthorType = {}
//
//  let authorPost = _.filter(allPosts, (item) => {
//
//    if (item.author?.name.trim().toLowerCase().replaceAll(" ", "-") === params.slug) {
//
//      author = {
//        firstName: item.author?.name.trim().split(" ")[0],
//        lastName: item.author?.name.trim().split(" ")[1],
//        job: item.author?.job,
//        image: item.author?.image,
//        social: item.author?.social,
//      }
//
//    }
//
//    return item.author?.name.trim().toLowerCase().replaceAll(" ", "-") === params.slug
//  })
//
//  return {
//    props: { posts: authorPost, author },
//  }
//}
