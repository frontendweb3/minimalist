import React, { useState } from 'react';
import Card from '@/components/Card/Card';
import { allPosts } from 'contentlayer/generated';
import { CardType,itemType } from '@/type';

function Search() {

    const [form, setForm] = useState<{ query: string }>({
        query: '',
    });

    const [queryPost, setQueryPost] = useState<{ posts: CardType[] | undefined }>({
        posts: [],
    });


    function changeText(event: { target: { value: string; }; }) {
        setForm({
            query: event.target.value.trim().toLowerCase()
        })
    }



    function submitFunction() {


        let total:any = allPosts.filter(( item ) => item.title.trim().toLowerCase().includes(form.query) === true)        
        
        setQueryPost({
            posts: total
        })


    }

    return (
        <div className='container mx-auto my-16'>



            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>

            <div className="relative">

                <input value={form.query} onChange={changeText} type="search" id="default-search" className="block w-full py-4 
                    pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Search the blog... " required={true} />


                <button onClick={submitFunction} className="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Search Now</button>


            </div>


            <div className='my-16 grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-5 justify-items-center mx-auto'>


                {
                    queryPost.posts ? queryPost.posts?.map(
                        (item) => <Card key={item.id} item={item} />
                    ) : ""
                }
                
            </div>
        </div>
    )
}

export default Search;