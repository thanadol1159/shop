"use client";

import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useRouter } from 'next/navigation'
export default function Page() {
  const router = useRouter()
  const id = router.query
  let myuuid = uuidv4();
  localStorage.setItem( 'Cookieid' , myuuid)
  const [cart_id, setCart_id] = useState(5);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: cartData, error: cartError, isLoading: cartIsLoading } = useSWR(
    "http://localhost:8000/api/carts/",
    fetcher
  );
  console.log(cartData);
  const { data: promotionData, error: PromotionError, isLoading: PromotionIsloading } = useSWR(
    "http://localhost:8000/api/promotions/",
    fetcher
  );

  if (PromotionError) return <div>failed to load</div>;
  if (PromotionIsloading && cartIsLoading) return <div>loading...</div>;


  const CheckPromotion = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/cart?cart_id=" + cart_id, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      console.log();
      if (res.ok) {
        console.log("Yeai!");
      } else {
        console.log("Oops! Something is wrong.");
      }
    } catch (error) {
      console.log(error);
    }

  }

  console.log(router);
  return (
    <div>
      {/* <div className=" flex flex-wrap">
        {promotionData?.map((promotions) => (
          <div className="flex w-1/5 mx-10 flex-wrap" key={promotions.id}>
            <h2 className=" border w-64 h-64 flex justify-center items-center mt-8">{promotions.name}</h2>
          </div>
        ))}

      </div>
          <legend className="pt-6 pl-4">Check Promotion</legend>
          <p className="pt-6 pl-4">product_id </p>
          <select
            name="cart_id"
            type="text"
            onChange={(e) => setCart_id(e.target.value)}
            className="mt-2 pt-2 pl-4 ml-4"
            value={cart_id}
          >
            {cartData?.map((cart_id, index) => (
            <option key={index} value={cart_id.id}>
              {cart_id.id}
            </option>
          ))}
          </select>
          <br/>
          <button onClick={CheckPromotion} className=" border bg-slate-300 p-1 ml-4 ">Submit</button> */}
          test

    </div>

  );
}
