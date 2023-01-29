import React from 'react'
import { NextSeo } from 'next-seo';
import Link from 'next/link';

function ErrorComponent() {

  return (
    <>
      <NextSeo
        title="404 Not Found"
        description="Something Worng "
        noindex={true}
        nofollow={true}
      />

      <div className="container my-12 bg-white dark:bg-slate-900 dark:text-white h-[640px] flex flex-col items-center justify-center mx-auto">
        <h2 className="text-8xl font-bold text-center mt-10 text-gray-700">Oops! </h2> 
        <p className="text-2xl text-center mt-12">The page you are looking for might have been removed, had its name changed or temporaiily unavailable</p>
        <Link className="text-lg bg-slate-800 text-center mt-10 px-10 py-4 text-white" href="/"> 
          Home
        </Link>
      </div>

    </>
  )
}

export default ErrorComponent