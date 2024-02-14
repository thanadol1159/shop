import Image from "next/image";
export default function Support() {
  return (
    <div className="container mx-auto mt-8">

      <div className="flex justify-center ">
        <div className="flex w-10/12 border-y justify-center items-center ">
          <div className="flex items-center hover:scale-110 hover:text-red-500 duration-300 my-10">
            <Image className="" src={"/delivery.png"} width={90} height={10} alt="star" />
            <div className="flex flex-col ml-4">
              <p className=" ">Free Shipping</p>
              <p>Free Shipping World Wide</p>
            </div>
          </div>

          <div className="flex items-center h-full ">
            <div className="flex border-x h-20  px-16 my-4 mx-12 hover:scale-110 hover:text-red-500 duration-300">
              <Image className="flex " src={"/clock.png"} width={100} height={100} alt="star" />
              <div className="flex flex-col ml-4">
                <p className=" hover:text-red-500">24 X 7 Service</p>
                <p>Online Service For New Customer</p>
              </div>
            </div>
          </div>

          <div className="flex items-center hover:scale-110 hover:text-red-500 duration-300">
            <Image src={"/announcer.png"} width={100} height={70} alt="star" />
            <div className="flex flex-col ml-4">
              <p className=" hover:text-red-500">Festival Offer</p>
              <p>New Online Special Festival Offer</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}