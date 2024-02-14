"use client";

import useSWR from "swr";
import Link from "next/link";
export default function Page() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/api/products/",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);
  return (
    <div className=" flex flex-wrap">
      {data.map((product) => (
        <div className="flex w-1/5 mx-10 flex-wrap" key={product.id}>
          <Link className="" href={"/product/" + product.id} >
            <h2 className=" border w-64 h-64 flex justify-center items-center mt-8">{product.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
