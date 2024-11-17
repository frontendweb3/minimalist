import React from 'react';
import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import _ from 'lodash';
import dayjs from "dayjs";
import Image from 'next/image';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))


export async function generateMetadata( { params }: { params: Promise<{ slug: string }> } ) {

  const slug = (await params).slug

  const post = allPosts.find((post) => post._raw.flattenedPath === slug)

  if (!post) throw new Error(`Post not found for slug: ${slug}`)

  return { title: post.title }

}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

  const slug = (await params).slug
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)

  if (!post) throw new Error(`Post not found for slug: ${slug}`)

  return (
    <main className="my-16 pt-8 pb-16 lg:pt-16 lg:pb-24">

      <div className="flex flex-col justify-between px-4 mx-auto max-w-screen-xl">

        <Image src={post?.image} alt={post.title} height={650} width={1224} className="rounded-t-lg bg-fixed h-[650px] w-full bg-origin-content  bg-cover bg-no-repeat p-2" />

        <article className="my-12 prose prose-slate prose-headings:text-primary prose-lead:text-secondary-foreground prose-ol:text-primary prose-ul:text-primary prose-a:text-primary prose-p:text-primary dark:prose-invert xl:prose-md w-full mx-auto max-w-4xl">
          <h1 className="text-3xl font-extrabold mb-2 lg:text-6xl text-primary">{post.title}</h1>
          <p className="lead font-bold">{post.description}</p>

          <div className="flex items-center justify-between mt-4 mb-6 not-italic">

            <Link href={`/author/${post.author?.name.trim().toLowerCase().replaceAll(" ", "-")}`} rel="author" className="no-underline">
              Published By {post.author?.name}
            </Link>

            <time dateTime={post.date} title={dayjs(post.date).format("MMM DD, YYYY")} className="text-base text-primary">
              {dayjs(post.date).format("MMM DD, YYYY")}
            </time>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post?.body?.html }} />
        </article>
      </div>
    </main>
  );
}

