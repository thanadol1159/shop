import subwomen from "../../public/sub-banner-women.jpg"
import submen from "../../public/sub-banner-men.jpg"
import Link from "next/link"
export default function Gender() {
    return (
        <div className="container mx-auto mt-16 " >
            <div className="flex gap-x-2 justify-center ">
                <div className="flex w1/2 ">
                    <Link href={"/product"}>
                        <div className="w-full relative bg-no-repeat h-full transition hover:-translate-y-1 hover:scale-105  duration-700" style={{
                            backgroundImage: `url(${submen.src})`,
                            width: '100%',
                            height: '100%',
                        }}>
                            <div className=" w-full text-end flex item-center h-full">
                                <div className="pl-64 z-20 flex ml-52 mr-16 flex-col items-center mt-32">
                                    <p className=" text-red-500 tracking-widest relative uppercase ">
                                        save 30%
                                    </p>
                                    <p className="uppercase text-6xl relative">
                                        men                    </p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </div>
                <div className="flex w1/2 ">
                    <Link href={"/product"}>
                        <div className="w-full relative bg-no-repeat h-full transition hover:-translate-y-1 hover:scale-105  duration-700" style={{
                            backgroundImage: `url(${subwomen.src})`,
                            width: '100%',
                            height: '100%',
                        }}>
                            <div className=" w-full text-end flex item-center h-full">
                                <div className="pl-64 z-20 flex ml-24 mr-16 flex-col items-center mt-32 pb-32">
                                    <p className=" text-red-500 tracking-widest relative uppercase ">
                                        save 60%
                                    </p>
                                    <p className="uppercase text-6xl relative">
                                        women                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
} 
