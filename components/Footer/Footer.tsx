import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
      <footer className="bg-white px-2 sm:px-4 py-4 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        
        <div className="container px-0 md:px-12 pb-6 flex flex-col sm:flex-row items-center justify-between mx-auto">
          
          <Link href="https://flowbite.com/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Minimalist</span>
          </Link>
  
            <ul className="flex flex-row dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              
              <li>
                <Link href="/" className="block py-2 pl-3 pr-4 text-black rounded bg-transparent dark:text-white" aria-current="page">Home</Link>
              </li>

              <li>
                <Link href="/page/about" className="block py-2 pl-3 pr-4 text-gray-700 rounded 
                bg-transparent  dark:text-white">About</Link>
              </li>

              <li>
                <Link href="/page/contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded 
                bg-transparent  dark:text-white">Contact</Link>
              </li>

            </ul>

        </div>

        <div className="container px-12 pt-6 flex flex-wrap items-center justify-between mx-auto">
          
          <Link href="https://flowbite.com/" className="flex items-center">
            Copyright @frontendweb
          </Link>
         
          <div className="flex md:order-2">

            <div className="flex-row flex md:flex">
              <Link href={'#'}>
                <FaFacebookF  />
              </Link>
              <Link className="mx-3"  href={'#'}>
                <FaTwitter />
              </Link>
              <Link href={'#'}>
                <FaLinkedinIn />
              </Link>
            </div>

          </div>

        </div>

      </footer>
  )
}