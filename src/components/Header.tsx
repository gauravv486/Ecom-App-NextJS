//@ts-nocheck
'use client'
import { CartContext } from "@/contexts/CartContex";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Addprobutton from "./Addprodbutton";

export default function Header() {

    const { cart, setCart } = useContext(CartContext);
    const [userInput, setUserInput] = useState("");
    const [suggestion, setSuggestion] = useState([]);

    useEffect(() => {

        async function getProds() {
            const response = await fetch('https://dummyjson.com/products?limit=194');
            const data = await response.json();
            const products = data.products;

            let results = products.filter((item) => item.title.toLowerCase().includes(userInput.toLowerCase()));

            setSuggestion(results.slice(0, 10));

        }

        if (userInput) {

            getProds();
        }
        else {
            setSuggestion([]);
        }

    }, [userInput])

    return (
        <div>
            <header className="text-white bg-[#131921] h-20 px-6">
                <div className="flex justify-between items-center h-full gap-4">
                    <div className="flex-shrink-0">
                        {/* <img src="https://www.pngmart.com/files/23/Amazon-Logo-White-PNG-Image.png" alt="Amazon Logo" height={100} width={100} /> */}
                    </div>

                    <div className="text-sm leading-tight">
                        <p className="font-semibold">Delivering in Moradabad</p>
                        <p className="text-blue-400 cursor-pointer hover:underline">Update location</p>
                    </div>

                    <div className="w-1/2" style={{
                        position: "relative"
                    }}>
                        <form action="/search" method="GET" className="flex">
                            <input
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                type="text"
                                name="q"
                                placeholder="Search Amazon.in"
                                className="flex-grow px-4 py-2 rounded-l-md bg-white text-black outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-r-md font-medium"
                            >
                                Search
                            </button>
                        </form>
                        <div className="bg-white" style={{
                            position: "absolute",
                            top: 50
                        }}>
                            {
                                suggestion.map((item) => {
                                    return (
                                        <div key={item.id} className="text-black">
                                            <Link href={`/search?q=${userInput}`}>{item.title}</Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="flex gap-4 text-sm font-semibold">

                        

                        <Link href={"/login"}>
                            <button className="hover:underline">Login</button>
                        </Link>
                        <Link href={"/cart"}>
                            <button className="hover:underline">Cart{cart.length}</button>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}
