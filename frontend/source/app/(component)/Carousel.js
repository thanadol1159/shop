import bg from "../../public/Carousel.jpg"

export default function Carousel() {
    return (
            <div className="w-full bg-no-repeat h-full" style={{
                backgroundImage: `url(${bg.src})`,
                width: '100%',
                height: '100%',
            }}>
                <div className=" w-1/2">
                    <div className="py-56 pl-64 z-20 flex flex-col items-center">
                        <h4 className=" text-gray-500 tracking-widest relative text-2xl">
                            welcome To Fashion
                        </h4>
                        <h1 className="uppercase text-6xl relative">
                            men fashion
                        </h1>
                        <button className="uppercase bg-[#ff4c3b] border-2 border-[#ff4c3b] px-6 py-3 text-sm text-white relative w-36 mt-6 transition hover:-translate-y-1 hover:scale-110  duration-300">shop now</button>
                    </div>
                </div>
        </div>

    )
}

