//@ts-nocheck
import Image from "next/image";
import Link from "next/link";
import AddtoCart from "./AddtoCart";

export default function Cards({ item }) {

  const href = "/product/" + item.id;

  return (
    <div className="w-64 rounded-2xl shadow-xl border border-gray-100 overflow-hidden bg-white transition duration-300 transform hover:scale-100 hover:shadow-2xl flex flex-col justify-between">

      <Link href={href}>
        <div className="h-40 bg-gradient-to-r from-gray-100 to-white flex items-center justify-center">
          <Image
            className="object-contain rounded-t-2xl"
            src={item.image_url || item.thumbnail}
            width={100}
            height={100}
            alt="Image"
          />
        </div>
        <div className="p-4 space-y-1">
          <h1 className="text-lg font-bold text-gray-900">{item.title}</h1>
          <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
          <p className="text-sm text-gray-500 font-semibold">{item.price}</p>
          <p className="text-sm text-yellow-500 font-semibold">⭐ {item.rating}</p>
        </div>
      </Link>

     
      <div className="flex justify-between items-center px-4 py-2">
        
        <div className="bg-yellow-400 text-white text-sm px-4 py-1 rounded-md hover:bg-yellow-300 shadow ">
          <AddtoCart item={item} />
        </div>

       
        <button className="bg-blue-600 text-white text-sm px-4 py-1 rounded-md hover:bg-blue-700 shadow">
          Buy Now
        </button>

      </div>
    </div>
  );
}
