import { allPosts } from 'contentlayer/generated';


export const PAGE_PAR_POSTS = 8


export function paginateUtility() {

  let page_par_posts = PAGE_PAR_POSTS;

  let getPaths = [];

  for (let index = 0; index < Math.ceil(allPosts.length / page_par_posts); index++) {
    getPaths.push({ params: { number: `${index + 1}` } })
  }
  return getPaths

}

export function paginate() {

  let page_par_posts = PAGE_PAR_POSTS;

  let paths = [];

  for (let index = 0; index < Math.ceil(allPosts.length / page_par_posts); index++) {
    paths.push(`${index + 1}`)
  }

  return paths
}

export const domain = process.env.NODE_ENV === 'development' ? "http://localhost:3000/" : 'https://frontendweb3.github.io/'
