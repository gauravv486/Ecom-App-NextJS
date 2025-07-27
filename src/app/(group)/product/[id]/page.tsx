//@ts-nocheck
import products from "@/constants/product";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {

    const id = params.id;
    const url = "https://dummyjson.com/products/" + id;

    const response = await fetch(url);
    const data = await response.json();

    return {
        title: data.id ? data.title : "Product Not Found",
        description: "hello product"
    }
}


export default async function Page({ params }) {

    const id = params.id;

    const url = "https://dummyjson.com/products/" + id;

    const response = await fetch(url);
    const data = await response.json();

    // const x = products.find((item) => {
    //     if (item.id == id) return true;
    // })

    if (!data.id) {
        notFound();
    }

    return (
        <div className="min-h-screen p-6 flex flex-col md:flex-row gap-6 bg-gray-50 ">

            <div className="h-1/2 rounded-lg overflow-hidden shadow-md w-full md:w-1/4">
                <Image
                    className="h-60 w-60 object-cover"
                    src={data?.thumbnail}
                    width={100}
                    height={100}
                    alt={data.title}
                />
            </div>

            <div className="flex flex-col gap-2 md:w-1/2">
                <h1 className="text-2xl font-bold text-gray-800">{data.title}</h1>
                <p className="text-sm text-gray-600">{data.description}</p>
                <p className="text-lg text-green-600 font-semibold">₹ {data.price}</p>
                <p className="text-sm text-yellow-500 font-medium">⭐ {data.rating}</p>
            </div>

        </div>

    )
}