import Image from "next/image"
export default function Brand() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center my-16 gap-24">
                <div className=" cursor-pointer opacity-60 hover:opacity-100 duration-300">
                    <Image src={"/brand.png"} width={150} height={200} alt="brand" />
                </div>
                <div className=" cursor-pointer opacity-60 hover:opacity-100 duration-300">
                    <Image src={"/brand2.png"} width={150} height={200} alt="brand2" />
                </div>
                <div className=" cursor-pointer opacity-60 hover:opacity-100 duration-300">
                    <Image src={"/brand3.png"} width={150} height={200} alt="brand3" />
                </div>
                <div className=" cursor-pointer opacity-60 hover:opacity-100 duration-300">
                    <Image src={"/brand4.png"} width={150} height={200} alt="brand4" />
                </div>
                <div className=" cursor-pointer opacity-60 hover:opacity-100 duration-300">
                    <Image src={"/brand5.png"} width={150} height={200} alt="brand5" />
                </div>
                <div className=" cursor-pointer bg opacity-60 hover:opacity-100 duration-300">
                    <Image src={"/brand6.png"} width={150} height={200} alt="brand6" />
                </div>
            </div>
        </div>
    )
}