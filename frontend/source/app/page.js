
import Link from "next/link";
import Image from "next/image";
import fixImg from "../public/fix-img.jpg"
import Carousel from "./(component)/Carousel.js"
import Gender from "./(component)/Gender.js"
import LatestDrop from "./(component)/latest-drop";
import Casual from "./(component)/Casual";
import Support from "./(component)/Support";
import Foryou from "./(component)/Foryou";
import Whowearwhat from "./(component)/Whowearwhat";
import Brand from "./(component)/Brand";

export default function Home() {
  return (

    <div className="">


      <Carousel/>
      <Gender/>
      <LatestDrop/>

      <div className="h-screen mt-6">
        <div className="h-full relative">
          <div className=" bg-cover bg-center bg-no-repeat py-72" style={{
            backgroundImage: `url(${fixImg.src})`,
            width: '100%',
            height: '100%',
          }}>
            <div className=" w-1/2 h-full">
              <div className=" pl-64 z-20 flex flex-col items-center ">
                <h1 className="uppercase text-6xl relative upper text-primary font-bold ">
                  2021
                </h1>
                <p className="uppercase text-6xl tracking-wide ">fashion trends</p>
                <p className="text-2xl tracking-widest ">SPECIAL OFFER</p>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <Casual/>
      <Support/>
      <Foryou/>
      <Whowearwhat/>
      <Brand/>
    </div>


  );
}