import Link from "next/link";
import type { Post, DocumentTypes } from "contentlayer/generated";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Card as CardLayout,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Card({ item }: { item: DocumentTypes | Post }) {
  return (
    <CardLayout
      key={item.id}
      className="flex flex-col py-0 h-[564px] gap-0 mx-4 lg:!mx-0 rounded-none"
    >
      <CardHeader className="relative w-full py-0 overflow-hidden h-[264px]">
        <Image
          fill={true}
          src={item.image}
          alt={item.title}
          className="object-fill"
        />
      </CardHeader>
      <CardContent className="py-8 md:py-10 space-y-7 lg:py-12">
        <CardTitle className="text-lg font-semibold md:text-xl">
          <Link
            href={`/read/${item.slug}`}
            className="flex items-center hover:underline hover:underline-offset-4"
          >
            {item.title}
          </Link>
        </CardTitle>
        <CardDescription className="mb-3 leading-7 line-clamp-3 md:mb-4 lg:mb-6">
          {item.description}{" "}
        </CardDescription>
      </CardContent>
    </CardLayout>
  );
}
