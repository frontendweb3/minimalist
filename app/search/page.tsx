"use client";

import React, { useState } from "react";
import { Card } from "@/components/Card/Card";
import { searchWithFuse } from "@/components/useFuse";
import type { Post } from "contentlayer/generated";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TypeResult {
  item: Post;
  refIndex: number;
}

export default function Search() {
  const [query, setQuery] = useState("");

  const allPosts: TypeResult[] = searchWithFuse(query);

  return (
    <section className="py-32">
      <div className="container grid max-w-lg space-y-2 items-center gap-4">
        <Label htmlFor="default-search">Search Your Articles</Label>
        <Input
          className="rounded-sm"
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          id="default-search"
          required={true}
          placeholder="Type your keywork"
        />
      </div>

      <div className="mt-36 max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {allPosts.map((post) => (
          <Card key={post.item.id} item={post.item} />
        ))}
      </div>
    </section>
  );
}
