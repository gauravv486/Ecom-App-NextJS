//@ts-nocheck
import Cards from "@/components/Card";
import Header from "@/components/Header";
import { error } from "console";
import { Suspense } from "react";
import ClipLoader from "react-spinners/ClipLoader";
// import { createContext } from "vm";

export default async function Home() {
  return (


    <Suspense fallback={

      <div className="h-[500px] w-screen flex flex-col justify-center items-center">
        <h1>Loading...</h1>
        <ClipLoader color="#36d7b7" size={70} />
      </div>
       
    }>
      <HomePage />

    </Suspense>

  )
}

async function HomePage() {

  let data;

  try {
    const response = await fetch('https://dummyjson.com/products?limit=194');
    const datas = await response.json();
    data = datas?.products || [];
  } catch (err) {
    console.log("eror")
  }



  return (
    <div className="min-h-screen bg-gray-50 relative ">
      {/* <Header /> */}
      <div className="flex flex-wrap justify-center items-center gap-6 px-4 py-6">
        {data?.map((item) => {
          return (
            <div key={item.id} className="transition-transform duration-300 hover:scale-103">
              <Cards item={item} />
            </div>
          );
        })}

        

      </div>
    </div>
  )
}