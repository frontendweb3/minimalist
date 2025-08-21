import React from "react";
import { Card } from "@/components/Card/Card";
import _ from "lodash";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import type { Post } from "contentlayer/generated";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: `Published by ${slug?.trim().replaceAll(" ", "-")}` };
}

export async function generateStaticParams() {
  let paths: { slug: string }[] = [];

  allPosts.map((item) => {
    if (item.author !== undefined) {
      paths.push({
        slug: item.author?.trim().toLowerCase().replaceAll(" ", "-"),
      });
    }
  });

  const RemoveDuplicateAuthor = paths.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.slug === value.slug),
  );
  return RemoveDuplicateAuthor;
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const AuthorPosts: Post[] = allPosts.filter((post) => {
    if (post.author !== undefined) {
      if (post.author?.trim().toLowerCase().replaceAll(" ", "-") === slug)
        return post;
    }
  });

  if (AuthorPosts.length === 0) {
    notFound();
  }

  return (
    <section className="py-32">
      <div className="container flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <h2 className="mb-3 text-pretty text-3xl capitalize font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {slug.replaceAll("-", " ")}
          </h2>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {AuthorPosts.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
