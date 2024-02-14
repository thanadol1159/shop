'use client'
import useSWR from "swr"
import { useRouter } from 'next/navigation'

import Link from "next/link";
import { useEffect } from "react";
export default function Promotion(props) {
  const cart_id = props.params.cartid
  console.log(props.params.cartid);
  const CheckPromotion = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/promotions?cart_id=" + cart_id, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.ok) {
        console.log("Yeai!");
      } else {
        console.log("Oops! Something is wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("promotion ...")
    CheckPromotion();
    
  }, [Promotion.prop])
  
  
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: promotionData, error: promotionError, isLoading: PromotionIsloading } = useSWR(
    "http://localhost:8000/api/promotions/",
    fetcher
    );
    
    const { data: cartData, error: cartError, isLoading: promotionIsloading } = useSWR(
      "http://localhost:8000/api/carts/",
      fetcher
      )
      if (promotionError) return <div>failed to load</div>;
      if (promotionIsloading) return <div>loading...</div>;
      
      
      
      
      return (
        <div className="text-6xl">
      I dont' know how to do this

      {cartData?.map((carts) => {
        return (
          <div key={carts.id}>
            {carts.item.name}
          </div>
        )
      })}
      <div className="flex justify-between px-20 mb-20">
        <Link href={"/cart/create"} className="bg-[#ff4c3b] border-2 border-[#ff4c3b] text-white py-3 text-sm uppercase px-8 hover:bg-white hover:text-black transition hover:-translate-y-1 hover:scale-110 hover:border-0  duration-300 cursor-pointer">continue shopping</Link>
        <Link href={"/cart"} className="bg-[#ff4c3b] border-2 border-[#ff4c3b] text-white py-3 text-sm uppercase px-8 hover:bg-white hover:text-black transition hover:-translate-y-1 hover:scale-110 hover:border-0  duration-300 cursor-pointer">Back to cart</Link>
      </div>
    </div>
  )
}