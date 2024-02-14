import Image from "next/image"
export default function Casual() {
    return (
        <div className="container mx-auto">
            <div className="grid gap-1 justify-center items-center pt-6 static mb-3">
                <h3 className="grid text-center text-red-600 text-sm text-primary 2xl"> Exclusive Products</h3>
                <h2 className="grid uppercase text-2xl font-bold"> EVERYDAY CASUAL</h2>
                <div className="grid items-center justify-center w-full">
                    <p className="grid border-b-4 border-red-500 w-14  text-primary mt-2"></p>
                </div>
            </div>

            <div className="flex justify-center relative">
                <ul className="flex flex-row gap-6 text-xl">
                    <i> work casual</i>
                    <i> WFH Weat</i>
                    <i>COMFORT WEAR</i>
                </ul>

            </div>

            <div className="flex justify-center mt-2">
                <div className="flex justify-center gap-6 flex-wrap w-full">
                    <div className="flex flex-col ">
                        <Image className="flex" src="/models.jpg" width={320} height={170} alt="logo" />
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
                    <div className="flex flex-col ">
                        <Image className="flex" src="/models2.jpg" width={320} height={170} alt="logo" />
                        <div className="flex flex-row gap-2 mt-4">
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/black_star.png"} width={10} height={170} alt="star" />
                        </div>
                        <p className="flex text-gray-600 text-sm">Multi-color Polo T-shirt</p>
                        <p className="flex items-end">$35.00 </p>
                    </div>
                    <div className="flex flex-col ">
                        <Image className="flex" src="/models3.jpg" width={320} height={170} alt="logo" />
                        <div className="flex flex-row gap-2 mt-4">
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/black_star.png"} width={10} height={170} alt="star" />
                        </div>
                        <p className="flex text-gray-600 text-sm">Pruple Solid Polo T-Shirt</p>
                        <p className="flex items-end">$28.00</p>
                    </div>
                    <div className="flex flex-col ">
                        <Image className="flex" src="/models4.jpg" width={320} height={170} alt="logo" />
                        <div className="flex flex-row gap-2 mt-4">
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/black_star.png"} width={10} height={170} alt="star" />
                        </div>
                        <p className="flex text-gray-600 text-sm">Candy Red Solid T-shirt</p>
                        <p className="flex items-end">$24.00 </p>
                    </div>
                    <div className="flex flex-col ">
                        <Image className="flex" src="/models4.jpg" width={320} height={170} alt="logo" />
                        <div className="flex flex-row gap-2 mt-4">
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/black_star.png"} width={10} height={170} alt="star" />
                        </div>
                        <p className="flex text-gray-600 text-sm">Candy Red Solid T-shirt</p>
                        <p className="flex items-end">$24.00</p>
                    </div>
                    <div className="flex flex-col ">
                        <Image className="flex" src="/models3.jpg" width={320} height={170} alt="logo" />
                        <div className="flex flex-row gap-2 mt-4">
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/black_star.png"} width={10} height={170} alt="star" />
                        </div>
                        <p className="flex text-gray-600 text-sm">Pruple Solid Polo T-Shirt</p>
                        <p className="flex items-end">$28.00</p>
                    </div>
                    <div className="flex flex-col ">
                        <Image className="flex" src="/models2.jpg" width={320} height={170} alt="logo" />
                        <div className="flex flex-row gap-2 mt-4">
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/black_star.png"} width={10} height={170} alt="star" />
                        </div>
                        <p className="flex text-gray-600 text-sm">Multi-color Polo T-shirt</p>
                        <p className="flex items-end">$35.00</p>
                    </div>
                    <div className="flex flex-col ">
                        <Image className="flex" src="/models.jpg" width={320} height={170} alt="logo" />
                        <div className="flex flex-row gap-2 mt-4">
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/yello_star.png"} width={10} height={170} alt="star" />
                            <Image src={"/black_star.png"} width={10} height={170} alt="star" />
                        </div>
                        <p className="flex text-gray-600 text-sm">Sleevless white Top</p>
                        <p className="flex items-end">$25.00 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}