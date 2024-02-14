import Image from "next/image"
export default function Whowearwhat() {
    return (<div className="flex justify-center w-full items-center flex-col ">
        <p className="flex text-4xl font-bold mb-6 mt-12">#WHOWEARWHAT</p>
        <div className="flex">
            <div>
                <Image src={"/slide.jpg"} width={420} height={200} alt="slide" />
            </div>
            <div>
                <Image src={"/slide2.jpg"} width={420} height={200} alt="slide2" />
            </div>
            <div>
                <Image src={"/slide3.jpg"} width={420} height={200} alt="slide3" />
            </div>
            <div>
                <Image src={"/slide4.jpg"} width={420} height={200} alt="slide4" />
            </div>
            <div>
                <Image src={"/slide5.jpg"} width={420} height={200} alt="slide5" />
            </div>
            <div>
                <Image src={"/slide6.jpg"} width={420} height={200} alt="slide6" />
            </div>
        </div>
    </div>)
}