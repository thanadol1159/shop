import Image from "next/image"
import fixImg from "../../public/fix-img.jpg"
export default function LatestDrop() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col justify-center">
                <div className="grid gap-1 justify-center items-center ">
                    <h3 className="grid text-center text-red-600 text-sm"> Special Offer</h3>
                    <h2 className="grid uppercase text-2xl font-bold"> latest drops</h2>
                    <div className="grid items-center justify-center w-full">
                        <p className="grid border-b-4 border-red-500 w-14"></p>
                    </div>
                </div>

                <div className="grid gap-1 justify-center items-center mt-10">
                    <p className="text-xs">Looking for the latest trends in clothing, shoes and accessories? Welcome to our 'Latest Drops' edit, bringing you all the latest styles from all your fave brands.</p>
                </div>

                <div className="flex justify-center mt-4">
                    <div className="flex gap-6">
                        <div className="flex flex-col ">
                            <Image className="flex" src="/models.jpg" width={250} height={170} alt="logo" />
                            <div className="flex flex-row gap-2 mt-4">
                                <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                                <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                                <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                                <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                                <Image src={"/black_star.png"} width={10} height={170} alt="star" />
                            </div>
                            <p className="flex text-gray-600 text-sm">Sleevless white Top</p>
                            <p className="flex items-end">$25.00 <spann className="line-through text-xs text-gray-400 ml-1"> $30.00</spann></p>
                        </div>
                        <div>
                            <Image src="/models2.jpg" width={250} height={170} alt="logo" />
                            <div className="flex flex-row gap-2 mt-4">
                                <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                                <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                                <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                                <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                                <Image src={"/black_star.png"} width={10} height={170} alt="star" />
                            </div>
                            <p className="flex text-gray-600 text-sm">Sleevless white Top</p>
                            <p className="flex items-end">$25.00 <spann className="line-through text-xs text-gray-400 ml-1"> $30.00</spann></p>
                        </div>
                        <div>
                            <Image src="/models3.jpg" width={250} height={170} alt="logo" />
                            <div className="flex flex-row gap-2 mt-4">
                                <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                                <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                                <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                                <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                                <Image src={"/black_star.png"} width={10} height={170} alt="star" />
                            </div>
                            <p className="flex text-gray-600 text-sm">Sleevless white Top</p>
                            <p className="flex items-end">$25.00 <spann className="line-through text-xs text-gray-400 ml-1"> $30.00</spann></p>

                        </div>
                        <div>
                            <Image src="/models4.jpg" width={250} height={170} alt="logo" />
                            <div className="flex flex-row gap-2 mt-4">
                                <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                                <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                                <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                                <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                                <Image src={"/black_star.png"} width={10} height={170} alt="star" />
                            </div>
                            <p className="flex text-gray-600 text-sm">Sleevless white Top</p>
                            <p className="flex items-end">$25.00 <spann className="line-through text-xs text-gray-400 ml-1"> $30.00</spann></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}