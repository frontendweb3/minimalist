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

      <div className="my-12 bg-white h-[450px] flex flex-col items-center justify-center mx-auto">
        <h2 className="text-6xl text-center mt-10">My Story </h2> 
        <p className="text-xl text-center mt-12">something Worng </p>
        <Link className="text-lg text-center mt-10" href="/"> 
          Home
        </Link>
      </div>
    </>
  )
}

export default ErrorComponent