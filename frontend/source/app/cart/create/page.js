"use client";

import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
export default function Page() {
  let myuuid = uuidv4();
  localStorage.setItem('Cookieid', myuuid)
  const [cart_id, setCart_id] = useState(myuuid);
  const [product_id, setproduct_id] = useState(2);
  const [amount, setAmount] = useState(1);
  const [popup,setPopup] = useState(false)
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: productData, error: productError, isLoading: productIsLoading } = useSWR(
    "http://localhost:8000/api/products/",
    fetcher
  );

  const { data: ImgData, error: ImgError, isLoading: ImgLoading } = useSWR(
    "http://localhost:8000/api/products/",
    fetcher
  );
  console.log(productData);


  const showPop = () => {
    setPopup(!popup) 
    console.log(popup);
  }
  if (productError) return <div>failed to load</div>;
  if (productIsLoading) return <div>loading...</div>;


  const CheckPromotion = async (e) => {
    showPop();
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/carts/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ cart_id, product_id, amount }),
      });
      console.log(res);
      console.log(product_id);
      console.log(amount);
      console.log(cart_id);
      if (res.ok) {

        console.log("Yeai!");
      } else {
        console.log("Oops! Something is wrong.");
      }
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="container mx-auto">
      <h1 className="capitalize font bold w-full bg-gray-100 text-3xl p-4 ">add product Cart</h1>
      <div className="flex my-6 gap-20 justify-center">
        <p className="flex capitalize items-center">product name </p>
        <select
          name="item"
          type="text"
          onChange={(e) => setproduct_id(e.target.value)}
          value={product_id}
          className="px-1 py-2"
        >
          {productData?.map((product_id, index) => (
            <option key={index} value={product_id.id}>
              {product_id.name}
            </option>
          ))}
        </select>
        <p className="capitalize"> amount</p>
        <input type="number" className="border text-center w-12" min={1} value={amount} onChange={(e) => setAmount(e.target.value)}></input>
        <button onClick={CheckPromotion} className=" border bg-[#ff4c3b] text-white  px-4 py-2  capitalize">add to cart</button>
      </div>

      {popup == true && <div className="container flex justify-center items-center ">
        <div class="bg-gray-100 w-1/6 fixed flex">
          <div class="bg-white p-6 w-full  md:mx-auto border-gray-950 ">
            <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
              <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
              </path>
            </svg>
            <div class="text-center">
              <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Add Done!</h3>
              <p class="text-gray-600 my-2">Thank you for pay me.</p>
              <p> Have a great day!  </p>
              <div class="py-10 text-center">
                <button onClick={showPop} class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>}



    </div>


  );
}
