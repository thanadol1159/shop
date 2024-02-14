import styles from '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
export default function Footer() {
    return (
        <div className="bg-gray-50 z-0">
            <div className="px-56">
                <div className="flex flex-row items-center justify-between border-b">
                    <div className="my-20 border-r pr-72">
                        <h4 className=" text-black uppercase font-bold"> Know it all first!</h4>
                        <p className=" text-gray-500 text-sm mt-2"> Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
                    </div>
                    <div className='flex items-center justify-end'>
                        <form className="flex items-center" >
                            <input className="border mr-4 py-4 pl-3 block w-96 focus:outline-none" placeholder="Enter your email" type="email" />
                            <button className=" flex bg-[#ff4c3b] border-2 border-[#ff4c3b] text-white py-4 uppercase px-10 hover:bg-white hover:text-black transition hover:border-[#fff]  duration-700" type='submit'>Subscribe</button>
                        </form>

                    </div>
                </div>
            </div>
            <div className='px-56'>
                <div className='flex flex-row mt-20 relative'>
                    <div className='flex flex-col w-2/6'>
                        <Image className='flex mb-6x' src="/logo.png" width={170} height={170} alt="logo" />
                        <p className='flex text-gray-500 text-sm leading-8 mt-4'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                        <ul className='pt-8 flex flex-row items-center'>
                            <li className='flex'>
                                <Link className="transition: 0.5s ease pr-11 mt-7 duration-300" href="http://localhost:3000/"><Image src="/facebook.png" width={15} height={30} alt="logo" /></Link>
                            </li>
                            <li className='flex'>
                                <Link className="pr-11 mt-7 duration-300" href="http://localhost:3000/"><Image src="/google.png" width={20} height={30} alt="logo" /></Link>
                            </li>
                            <li className='flex'>
                                <Link className=" pr-11 mt-7 duration-300" href="http://localhost:3000/"><Image src="/twitter.png" width={15} height={30} alt="logo" /></Link>
                            </li>
                            <li className='flex'>
                                <Link className=" pr-11 mt-7 duration-300" href="http://localhost:3000/"><Image src="/instragram.png" width={15} height={30} alt="logo" /></Link>
                            </li>
                            <li className='flex'>
                                <Link className=" pr-11 mt-7 duration-300" href="http://localhost:3000/"><Image src="/signal.png" width={15} height={30} alt="logo" /></Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex ml-32 flex-col'>
                        <div className=' uppercase '>
                            my account
                        </div>
                        <div className='mt-6'>
                            <ul>
                                <li className='text-gray-500 text-sm leading-8'><p className='cursor-pointer' >Mens</p></li>
                                <li className='text-gray-500 text-sm leading-8'><p className='cursor-pointer' >Womens</p></li>
                                <li className='text-gray-500 text-sm leading-8'><p className='cursor-pointer' >Clothing</p></li>
                                <li className='text-gray-500 text-sm leading-8'><p className='cursor-pointer' >Accessories</p></li>
                                <li className='text-gray-500 text-sm leading-8'><p className='cursor-pointer' >Featured</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex w-1/5'>
                        <div className='flex ml-32 flex-col'>
                            <div className='uppercase'>
                                why we choose
                            </div>
                            <div className='mt-6'>
                                <ul>
                                    <li className='text-gray-500 text-sm leading-8'><p className='cursor-pointer' >Shipping & Return</p></li>
                                    <li className='text-gray-500 text-sm leading-8'><p className='cursor-pointer' >Secure Shopping</p></li>
                                    <li className='text-gray-500 text-sm leading-8'><p className='cursor-pointer' >Gallary</p></li>
                                    <li className='text-gray-500 text-sm leading-8'><p className='cursor-pointer' >Affiliates</p></li>
                                    <li className='text-gray-500 text-sm leading-8'><p className='cursor-pointer' >Contacts</p></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className='flex w-1/5'>
                        <div className='flex ml-32 flex-col'>
                            <div className='uppercase'>
                                store information
                            </div>
                            <div className='mt-6 block'>
                                <ul className='relative'>
                                    <li className='text-gray-500 text-sm leading-8 block'><Image className='inline-block' src="/pin2.png" width={20} height={50} alt="logo" />Multikart Demo Store, Demo Store India 345-659</li>
                                    <li className='text-gray-500 text-sm leading-8 block'><Image className='inline-block' src="/phone2.png" width={20} height={20} alt="logo" />Call Us: 123-456-7898</li>
                                    <li className='text-gray-500 text-sm leading-8 block'><Image className='inline-block' src="/mail.png" width={20} height={20} alt="logo" />Email Us:<Link className='cursor-pointer' href={"http://localhost:3000/"} > Support@Multikart.Com</Link></li>
                                    <li className='text-gray-500 text-sm leading-8 block'><Image className='inline-block' src="/fax.png" width={20} height={20} alt="logo" />Fax: 123456</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}