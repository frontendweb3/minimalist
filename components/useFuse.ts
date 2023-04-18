import Fuse from "fuse.js";
import { allPosts } from 'contentlayer/generated';

const options = {
  isCaseSensitive: true,
  minMatchCharLength: 3,
  shouldSort: true,
  useExtendedSearch: true,
  findAllMatches: true,
  keys: ['title', 'description', 'author.name']
}

const fuse = new Fuse(allPosts, options)

export function searchWithFuse(query: string) {
  if (!query) {
    return [];
  }
  return fuse.search(query)
}
