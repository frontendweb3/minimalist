import { allPosts } from 'contentlayer/generated';

export function paginateUtility() {
    let page_par_posts = 8;

    let getPaths = [];

    for (let index = 0; index < Math.ceil(allPosts.length / page_par_posts) ; index++) {
        getPaths.push({  params: { number: `${index+1}` } })
    }

    return getPaths
}

export function paginate(){
    
    let page_par_posts = 8;


    let paths = [];


    for (let index = 0; index < Math.ceil(allPosts.length / page_par_posts) ; index++) {
        paths.push(`${index+1}`)
    }   


    return paths
}