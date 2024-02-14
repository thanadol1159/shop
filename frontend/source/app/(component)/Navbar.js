import Link from "next/link";
import Image from "next/image";
import styles from "@/app/globals.css";
export default function Navbar() {
  return (
    <div>
      <div className="flex bg-gray-50 justify-around items-center h-16 text-gray-400 flex-wrap text-sm">
        <div className="flex flex-row">
          <ul className=" flex  items-center">
            <li className="mr-10">
              Welcome to Out store Multikart
            </li>
            <li className="flex items-center">
              <Image className="mr-2 .image" src="/phone.png" width={15} height={15} alt="phone" /> Call Us: 123-456-7890
            </li>
          </ul>
        </div>

        <div className="flex item-center">
          <div className="flex flex-row">
            <ul className="flex items-center">
              <li className="mr-6">
                <Image className="mr-2" src="/like.png" width={15} height={15} alt="like" />
              </li>
              <li className="flex items-center">
                <Image className="mr-2" src="/user.png" width={15} height={15} alt="user" />
                My Account
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="bg-white border-gray-200 dark:bg-gray-900 my-5">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image className="mr-6" src="/hamburger.png" width={25} height={25} alt="logo" />
            <Link href="http://localhost:3000/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/logo.png" className="h-8" alt="Flowbite Logo" />
            </Link>
          </div>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto uppercase" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg items-center bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="http://localhost:3000/" className="block py-2 px-3 text-white bg-red-500 rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-blue" aria-current="page">Home</Link>
              </li>
              <li className="flex flex-row items-center">
                <Link href="#" className="block py-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white duration-300">feature</Link>
                <Image className="ml-2" src="/down-arrow.png" width={30} height={50} alt="drop-down" />
              </li>
              <li className="flex flex-row items-center">
                <Link href="#" className="block py-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white duration-300">shop</Link>
                <Image className="ml-2" src="/down-arrow.png" width={30} height={50} alt="drop-down" />
              </li>
              <li className="flex flex-row items-center">
                <Link href="#" className="block py-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white duration-300">product</Link>
                <Image className="ml-2" src="/down-arrow.png" width={30} height={50} alt="drop-down" />
              </li>
              <li className="flex flex-row items-center">
                <Link href="#" className="block py-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white duration-300">pages</Link>
                <Image className="ml-2" src="/down-arrow.png" width={30} height={50} alt="drop-down" />
              </li>
              <li className="flex flex-row items-center">
                <Link href="#" className="block py-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white duration-300">blog</Link>
                <Image className="ml-2" src="/down-arrow.png" width={30} height={50} alt="drop-down" />
              </li>
              <li>
                <Link href="#"><Image src={"/search.png"} alt="user" width={20} height={20} /></Link>
              </li>
              <li>
                <Link href="#"><Image src={"/setting.png"} alt="user" width={20} height={20} /></Link>
              </li>
              <li>
                <Link href="/cart"><Image src={"/cart2.png"} alt="cart" width={20} height={20} /></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>


  )
}