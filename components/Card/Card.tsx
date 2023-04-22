import Link from "next/link";
import Image from "next/image"
import Dropdown from "../Dropdown/Dropdown"
// import { type Post } from 'contentlayer/generated';
import type { Post, DocumentTypes } from 'contentlayer/generated'

export default function Card({ item }: { item: DocumentTypes | Post }) {

  return (
    <div className="w-full h-full bg-white dark:bg-gray-900">
      <div className="my-14 mx-0  md:mx-5 lg:mx-10 xl:mx-14 flex flex-col max-w-6xl max-h-xl">

        <Image priority={true} height={350} width={1224} alt={item.title} src={item.image} className="h-[450px] rounded-t-lg bg-origin-content bg-cover bg-no-repeat p-2 m-3 " />

        <div className="p-5">

          <Link href={`/read/${item.slug}`}>
            <h5 className="mb-2 px-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
          </Link>

          <div className="flex flex-row justify-between">

            <span className="black-white dark:text-white flex flex-row  items-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" className="bg-white dark:bg-white" clipRule="evenodd" d="M39.6594 23.05C34.5637 17.1 29.1652 14 24.0189 14C18.8727 14 13.4742 17.1 8.3784 23.05C7.87387 23.6 7.87387 24.45 8.3784 25C13.4742 30.9 18.8727 34 24.0189 34C29.1652 34 34.5637 30.9 39.6594 24.95C40.1135 24.4 40.1135 23.6 39.6594 23.05ZM24.0189 32C19.6295 32 14.7355 29.15 10.1947 24C14.7355 18.85 19.6295 16 24.0189 16C28.4084 16 33.3023 18.85 37.8431 24C33.3023 29.15 28.4084 32 24.0189 32ZM24.0189 18C20.689 18 17.9645 20.7 17.9645 24C17.9645 27.3 20.689 30 24.0189 30C27.3488 30 30.0733 27.3 30.0733 24C30.0733 20.7 27.3488 18 24.0189 18ZM24.0189 28C21.799 28 19.9827 26.2 19.9827 24C19.9827 21.8 21.799 20 24.0189 20C26.2389 20 28.0552 21.8 28.0552 24C28.0552 26.2 26.2389 28 24.0189 28Z" fill="currentColor" />
              </svg>
              {item.view}
            </span>

            <Dropdown />

          </div>

        </div>

      </div>
    </div>
  )
}
