import Image from "next/image"
export default function Foryou() {
    return (
        <div className="container mx-auto">
            <div className=" mt-10">
                <p className="flex text-primary justify-center"> From The Blog</p>
                <p className="flex uppercase text-3xl justify-center font-bold">fashion for tou</p>
                <div className="grid items-center justify-center w-full">
                    <p className="grid border-b-4 border-red-500 w-14  text-primary mt-2"></p>
                </div>
            </div>

            <div className="flex justify-center mt-8 gap-8">
                <div className="flex gap-12">
                    <div>
                        <Image src={"/suggest.jpg"} width={420} height={200} alt="suggest" />
                        <div className="flex justify-center flex-col mt-2">
                            <p className="flex justify-center text-primary text-red-500">25 January 2018</p>
                            <p className="flex">London fashion & Hair Trends From Fashion Week</p>
                            <div className="grid items-center justify-center w-full">
                                <p className="grid border-b-4 border-red-500 w-14  text-primary mt-2 my-4"></p>
                            </div>
                            <p className="flex justify-center text-gray-400 text-sm">by: John Dio , 2 Comment</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div>
                        <Image src={"/suggest3.jpg"} width={420} height={200} alt="suggest3" />
                        <div className="flex justify-center flex-col mt-2">
                            <p className="flex justify-center text-primary text-red-500">25 January 2018</p>
                            <p className="flex">Lorem ipsum dolor sit consectetur adipiscing elit,</p>
                            <div className="grid items-center justify-center w-full">
                                <p className="grid border-b-4 border-red-500 w-14  text-primary mt-2 my-4"></p>
                            </div>
                            <p className="flex justify-center text-gray-400 text-sm">by: John Dio , 2 Comment</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div>
                        <Image src={"/suggest2.jpg"} width={420} height={200} alt="suggest2" />
                        <div className="flex justify-center flex-col mt-2">
                            <p className="flex justify-center text-primary text-red-500">25 January 2018</p>
                            <p className="flex">Quarantine Birthday Celebration | In The Times of COVID-19</p>
                            <div className="grid items-center justify-center w-full">
                                <p className="grid border-b-4 border-red-500 w-14  text-primary mt-2 my-4"></p>
                            </div>
                            <p className="flex justify-center text-gray-400 text-sm">by: John Dio , 2 Comment</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}