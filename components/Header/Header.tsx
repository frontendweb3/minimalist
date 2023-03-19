import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSearch } from "react-icons/fa";
import { useTheme } from 'next-themes'
import Dark from "../icons/Dark"
import Light from "../icons/Light"
import { useState } from "react";

export default function Header() {

  const { theme, setTheme } = useTheme()

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">

      <div className="container flex flex-wrap items-center justify-around md:justify-between mx-auto">

        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Minimalist</span>
        </Link>

        <button onClick={() => setOpenMenu(!openMenu)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-end p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-transparent  dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>
        </button>

        <nav className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">

          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
            </li>

            <li>
              <Link href="/page/about" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
            </li>

            <li>
              <Link href="/page/contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
            </li>

          </ul>

        </nav>

        <div className="flex md:order-2">

          <div className=" flex-row items-center hidden md:flex">
            <Link href={'/search'}>
              <FaSearch className="dark:text-white" />
            </Link>
            <Link target="_blank" className="ml-3" href={'https://www.facebook.com/officialrajdeepsingh'}>
              <FaFacebookF className="dark:text-white" />
            </Link>
            <Link target="_blank" className="ml-3" href={'https://twitter.com/Official_R_deep'}>
              <FaTwitter className="dark:text-white" />
            </Link>
            <Link target="_blank" className="ml-3" href={'https://www.linkedin.com/in/officalrajdeepsingh/'}>
              <FaLinkedinIn className="dark:text-white" />
            </Link>

            <button
              id="theme-toggle"
              type="button"
              className="ml-3 text-gray-500 dark:text-white focus:outline-none dark:focus:ring-gray-700 rounded-lg text-sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Light /> : <Dark />}
            </button>
          </div>
        </div>
      </div>
      <nav className={`items-center justify-between ${openMenu === true ? "" : "hidden"} w-full md:hidden`} id="navbar-sticky">

        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

          <li>
            <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
          </li>

          <li>
            <Link href="/page/about" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
          </li>

          <li>
            <Link href="/page/contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
          </li>

        </ul>

      </nav>

    </header>
  )
}
