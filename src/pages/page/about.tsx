import React from 'react'
import { NextSeo } from 'next-seo';
import Link from 'next/link';

function About() {
  
    return (
        <>
         <NextSeo
            title="About us"
            description="About us - here is my story"
        /> 

        <div className='bg-white p-20 my-24  grid grid-cols-1  lg:grid-cols-2 justify-items-center items-center'>

          <div className='p-10'>

            <h2 className="text-6xl mb-3">Joseph Gonzalez</h2>

            <p className="text-xl mt-4 order-1">
             Ea elit amet minim adipisicing enim velit veniam. Laborum laboris labore dolor veniam ex occaecat cillum. Cupidatat laboris pariatur officia aliquip proident dolore quis enim. Reprehenderit nostrud exercitation fugiat velit elit ad cupidatat sit consequat aute elit. Culpa est in eu pariatur labore sit ullamco proident. Id ullamco in irure fugiat amet. Et labore qui labore occaecat laborum esse deserunt sunt laborum. Voluptate incididunt incididunt est reprehenderit cillum ex qui minim anim. Occaecat deserunt sunt aliquip et ad irure dolor. Pariatur consectetur irure sint mollit. 
            </p>

          </div>

          <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx)" }} className="rounded-full h-[350px] w-[350px] bg-origin-content bg-cover bg-center bg-no-repeat p-2 m-3"></div>
        </div>

      </>
    )
  }

export default About