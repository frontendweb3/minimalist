import React, { useState } from 'react';
import Card from '@/components/Card/Card';
import { searchWithFuse } from "@/components/useFuse";


function Search() {

  const [query, setQuery] = useState("");

  const result = searchWithFuse(query)

  return (

    <div className='container mx-auto my-16'>


      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>

      <div className="relative">

        <input onChange={(event) => setQuery(event.target.value)} type="search" id="default-search" className="block w-full py-4 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search the blog" required={true} />

      </div>


      <div className='my-16 grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-5 justify-items-center mx-auto'>

        {
          result ? result?.map((result) => <Card key={result.item.id} item={result.item} />) : ""
        }

      </div>

    </div>
  )
}

export default Search;
