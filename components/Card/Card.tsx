import Link from "next/link";
import { CardType } from '@/type';
import Image from "next/image"

export default function Card({ item }: { item: CardType }) {

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


            <button id="dropdownDelayButton" data-dropdown-toggle="dropdown" data-dropdown-delay="400" data-dropdown-trigger="click" className="text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-800" type="button">
              <svg width="64" className="text-black dark:text-white" aria-hidden="true" height="48" viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 24C4 21.2386 6.47176 19 9.52083 19C12.5699 19 15.0417 21.2386 15.0417 24C15.0417 26.7614 12.5699 29 9.52083 29C6.47176 29 4 26.7614 4 24ZM12.8333 24C12.8333 22.3431 11.3503 21 9.52083 21C7.69139 21 6.20833 22.3431 6.20833 24C6.20833 25.6569 7.69139 27 9.52083 27C11.3503 27 12.8333 25.6569 12.8333 24ZM21.0417 24C21.0417 21.2386 23.5135 19 26.5626 19C29.6117 19 32.0834 21.2386 32.0834 24C32.0834 26.7614 29.6117 29 26.5626 29C23.5135 29 21.0417 26.7614 21.0417 24ZM29.8751 24C29.8751 22.3431 28.392 21 26.5626 21C24.7331 21 23.2501 22.3431 23.2501 24C23.2501 25.6569 24.7331 27 26.5626 27C28.392 27 29.8751 25.6569 29.8751 24ZM43.6043 19C40.5553 19 38.0835 21.2386 38.0835 24C38.0835 26.7614 40.5553 29 43.6043 29C46.6534 29 49.1252 26.7614 49.1252 24C49.1252 21.2386 46.6534 19 43.6043 19ZM43.6043 21C45.4338 21 46.9168 22.3431 46.9168 24C46.9168 25.6569 45.4338 27 43.6043 27C41.7749 27 40.2918 25.6569 40.2918 24C40.2918 22.3431 41.7749 21 43.6043 21Z" fill="currentColor" />
                </g>
                <defs>
                  <filter id="filter0_d" x="-3" y="0" width="61" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                  </filter>
                </defs>
              </svg>
            </button>

            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                <li>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Share</Link>
                </li>
                <li>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bookmark</Link>
                </li>
                <li>
                  <Link href="/" className="block px-4 py-2 hover:bg-red-100 dark:hover:bg-red-600 dark:hover:text-white">Report</Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
