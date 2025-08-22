import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Hero() {
  const post = allPosts[0];
  return (
    <Card className="my-24 mx-4 lg:!mx-auto flex bg-blue-950 md:w-[1024px] lg:w-[1224px] py-0 flex-col lg:flex-row items-center rounded-sm">
      <CardHeader className="relative w-full h-[424px]">
        <Image
          className="mx-auto object-cover object-center"
          src={post.image}
          fill={true}
          alt={post.title}
        />
      </CardHeader>
      <CardContent className="flex flex-col py-4 px-4 items-start justify-start">
        {post?.tags !== undefined ? (
          <Badge className="mb-8 rounded-none text-xs font-bold uppercase tracking-widest  text-center">
            {" "}
            <Tag /> {post?.tags[0]}{" "}
          </Badge>
        ) : (
          ""
        )}
        <CardTitle className="mb-8 text-4xl text-white font-semibold leading-12 md:text-4xl">
          {post.title}{" "}
        </CardTitle>
        <CardDescription className="mb-8 text-lg text-white leading-8">
          {post.description}{" "}
        </CardDescription>
        <Link
          href={`/read/${post.slug}`}
          className="hover:underline text-white flex flex-row items-center underline-offset-8 rounded-none"
        >
          Read Now <ArrowRight className="ml-2 size-4" />{" "}
        </Link>
      </CardContent>
    </Card>
  );
}
