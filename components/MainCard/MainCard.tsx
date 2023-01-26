import Link from "next/link"
export default function Card() {
  return (
    <>
      <a href="/page/read/my-now-is" className="my-16 p-4 sm:6 md:p-12 lg:p-12 mx-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row md:max-w-full justify-center hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

      <img className="h-full w-full lg:h-[350px] lg:w-[475px] lg:order-2 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://cdn.pixabay.com/photo/2020/12/13/16/37/woman-5828787_960_720.jpg" alt=" Learn is here " />
      
      <div className=" flex flex-col justify-between p-4 leading-normal">
        <p className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Bootstrap</p>
        
        <h2 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h2>

        <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise  technology acquisitions of 2021 so far, in reverse chronological order.</p>

        <Link href="/read/my-now-is" className="text-center w-44 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  font-medium rounded-sm text-sm px-5 py-2.5 mr-2 my-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Read Now</Link>
      </div>
        
      </a>

    </>
  )
}