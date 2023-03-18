import React from 'react'
import { NextSeo } from 'next-seo';
import Image from 'next/image';

function About() {

  return (
    <>

      <NextSeo
        title="About us"
        description="About us - here is my story"
      />

      <div className='bg-white dark:text-white dark:bg-gray-900 p-20 my-24  grid grid-cols-1  lg:grid-cols-2 justify-items-center items-center'>

        <div className='p-10'>

          <h2 className="text-6xl mb-3">Joseph Gonzalez</h2>

          <p className="text-xl mt-4 order-1">
            Ea elit amet minim adipisicing enim velit veniam. Laborum laboris labore dolor veniam ex occaecat cillum. Cupidatat laboris pariatur officia aliquip proident dolore quis enim. Reprehenderit nostrud exercitation fugiat velit elit ad cupidatat sit consequat aute elit. Culpa est in eu pariatur labore sit ullamco proident. Id ullamco in irure fugiat amet. Et labore qui labore occaecat laborum esse deserunt sunt laborum. Voluptate incididunt incididunt est reprehenderit cillum ex qui minim anim. Occaecat deserunt sunt aliquip et ad irure dolor. Pariatur consectetur irure sint mollit.
          </p>

        </div>

        <Image height={350} width={350} alt="here is" src={`/images/minimalist-logo.jpeg`} className="rounded-full bg-origin-content bg-cover bg-center bg-no-repeat p-2 m-3" />

      </div>

    </>
  )
}

export default About
