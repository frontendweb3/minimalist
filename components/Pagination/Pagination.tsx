import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
// import { PaginationItem } from '@/type';

function Pagination({ pagination }: { pagination: { page_par_posts: number; pageCount: string[]; } }) {

  const { query: { number } } = useRouter()

  return (
    <div className='flex flex-row mx-auto justify-center w-full my-16'>
      {
        pagination.pageCount.map(

          (item: string) => {
            return <Link key={item} href={`${item === "1" ? "/" : `/pagination/${item}`}`}
              className={`${item === number ? "text-gray-500 bg-gray-700  " : "text-white bg-gray-800 hover:bg-gray-900  focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 "} py-2.5 px-5 mr-2 mb-2 text-sm font-medium`}>
              {item}
            </Link>

          }
        )
      }
    </div>
  );
}

export default Pagination;
