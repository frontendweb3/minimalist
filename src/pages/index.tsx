import Head from 'next/head'
import Image from 'next/image'
import React from 'react';

import { NextSeo } from 'next-seo';
import RajdeepSingh from '@/components/asset/RajdeepSingh.jpg'
import logo from '@/components/asset/logo.svg'
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainCard from '@/components/MainCard/MainCard';
import Card from '@/components/Card/Card';

import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })



export default function Index() {


  return (
    <>
      <NextSeo
        title={"generalSettings.title"}
        description={"generalSettings.description"}
        canonical="https://www.rajdeepsingh.dev/"
        openGraph={{
          url: 'https://www.rajdeepsingh.dev/',
          title: "generalSettings.title",
          description: " generalSettings.description",
          images: [{
            url: "logo",
            alt: "Rajdeep Singh --Learn With Me",
          }
          ],
          site_name: 'Rajdeep Singh',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }} />


      <MainCard />

<h2 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white px-10">Article -</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 justify-items-center mx-auto'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

<div className='flex flex-row mx-auto justify-center w-full my-8'>
  <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">1</button>
  <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">2</button>
  <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">3</button>
</div>

    </>
  )
}

