import React from "react";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import _ from "lodash";
import dayjs from "dayjs";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, Tag } from "lucide-react";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;

  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) {
    notFound();
  }

  return { title: post.title };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col">
      <Button
        variant={"link"}
        size={"icon"}
        className="container mt-12 mb-3 mx-auto justify-start"
      >
        <Link className="flex flex-row gap-5 items-center" href={"/"}>
          <ChevronLeft size={28} />
          Back
        </Link>
      </Button>

      <div className="relative mt-10 h-[664px] w-full">
        <Image
          src={post?.image}
          alt={post.title}
          fill={true}
          className="object-cover bg-fixed"
        />
      </div>

      <article className="my-24 prose prose-slate dark:prose-invert w-full mx-auto max-w-4xl">
        <h1 className="text-3xl font-extrabold mb-3 leading-20 md:text-6xl lg:text-7xl">
          {post.title}
        </h1>
        <p className="lead font-medium">{post.description}</p>
        <div className="flex items-center justify-between mt-4 mb-6 not-italic">
          <Link
            href={`/author/${post.author?.trim().toLowerCase().replaceAll(" ", "-")}`}
            rel="author"
            className="no-underline"
          >
            Published By {post?.author}
          </Link>

          <div className="flex flex-row gap-5 items-center">
            <time
              dateTime={post.date}
              title={dayjs(post.date).format("MMM DD, YYYY")}
              className="text-base text-primary"
            >
              {dayjs(post.date).format("MMM DD, YYYY")}
            </time>
            {post.category !== undefined && (
              <Button variant={"ghost"}>
                <Tag /> {post?.category[0]}
              </Button>
            )}
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post?.body?.html }} />
      </article>
    </main>
  );
}
