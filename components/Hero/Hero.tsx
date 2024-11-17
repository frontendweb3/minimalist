import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { Card, CardDescription, CardTitle } from "@/components/ui/card"

export function Hero() {

  const post = allPosts[0]
  return (
    <Card className="container relative py-24 rounded-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center">
        <div className="w-full rounded-sm lg:w-1/2 lg:max-w-lg">
          <Image priority={true} width={475} height={570} className="mx-auto rounded-lg object-cover object-center" src={post.image} alt={post.title} />
        </div>
        <div className="mb-16 mt-12 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:grow lg:pl-6 xl:mt-0 xl:pl-24">

          {
            post?.tags !== undefined ? <Badge className="mb-8 text-xs font-bold uppercase tracking-widest  text-center"> {post?.tags[0]} </Badge> : ""
          }

          <CardTitle className="mb-8 text-4xl font-semibold leading-none tracking-tight md:text-7xl lg:text-5xl"> {post.title}  </CardTitle>
          <CardDescription className="mb-8 text-lg leading-relaxed text-gray-500"> {post.description} </CardDescription >

          <Link href={`/read/${post.slug}`}>
            <Button variant="secondary" className="w-full sm:w-auto hover:underline">Read more   <ArrowRight className="ml-2 size-4" /> </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
