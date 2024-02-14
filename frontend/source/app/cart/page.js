"use client";

import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import Promotion from "./[cartid]/promotion/page";
import { useRouter } from "next/router";
export default function Page() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/api/carts/",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  let total_price = 0;
  let total_amount = 0

  for (let i = 0; i < data.length; i++) {
    total_price += data[i].amount * data[i].item.price;
  }

  for (let i = 0; i < data.length; i++) {
    total_amount += data[i].amount;
  }

  console.log(data);

  return (
    <div className="px-56">
      <div className=" flex justify-around bg-gray-50 py-10 text-xl uppercase">
        <p> cart</p>
        <p></p>
        <p>home / cart</p>
      </div>

      <div className="flex justify-center my-6 px-20">
        <table className=" w-full">
          <thead className="w-full border-b">
            <tr className="w-full uppercase flex justify-center gap-32">
              <th className="w-56 my-4">Product Name</th>
              <th className="w-20 my-4"> Price</th>
              <th className="w-20 my-4" >amount</th>
              <th className="w-20 my-4">action</th>
              <th className="w-20 my-4">total</th>
              <th className="w-48 my-4"> </th>
            </tr>
          </thead>
          <tbody className="w-full ">
            {data.map((carts) => (
              <tr key={carts.id} className="w-full flex justify-center gap-32 border-b">
                <td className="w-56 text-center my-8">{carts.item.name}</td>
                <td className="w-20 text-center my-8">${carts.item.price}</td>
                <td className="w-20 my-8"><input type="number" className="border text-center w-20 py-1 " defaultValue={carts.amount} min={1} /> </td>
                <td className="flex justify-center items-center w-20 my-8"> <Image src={"/close.png"} width={10} height={100} alt="img" /></td>
                <td className="text-red-500 text-xl w-20 text-center my-8">{carts.item.price * carts.amount} </td>
                <td className="flex justify-center items-center "><Link href={"/cart/"+carts.id +"/promotion/" }  className="bg-[#ff4c3b] border-2 border-[#ff4c3b] text-white py-3 text-sm uppercase px-8 hover:bg-white hover:text-black transition  hover:border-1 items-center flex text-center  duration-300">check promotion</Link></td>
              </tr>
            ))}
            <tr className="w-full flex justify-center gap-32 ">
              <td className="w-56"></td>
              <td className="w-20"></td>
              <td className="w-44"></td>
              <td colSpan="5" className="flex justify-end items-center capitalize"> total price</td>
              <td className="flex text-2xl w-20 text-center my-4"> {total_price} </td>
            </tr>
          </tbody>
        </table>

      </div>
      <div className="flex justify-between px-20 mb-20">
        <Link href={"/cart/create"} className="bg-[#ff4c3b] border-2 border-[#ff4c3b] text-white py-3 text-sm uppercase px-8 hover:bg-white hover:text-black transition hover:-translate-y-1 hover:scale-110 hover:border-0  duration-300 cursor-pointer">continue shopping</Link>
      </div>

    </div>
  );
}
