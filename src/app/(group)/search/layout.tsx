//@ts-nocheck
'use client'
import Header from "@/components/Header";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Searchlayout({ children }) {

    const searchparams = useSearchParams();

    let query = searchparams.get('q') || "";
    let minValue = searchparams.get('min') || "";
    let maxValue = searchparams.get('max') || "";
    let ratingvalue = searchparams.get('rating') || "";


    const [min, setMin] = useState(minValue);
    const [max, setMax] = useState(maxValue);
    const [rating, setRating] = useState(ratingvalue);

    function updateMin(num) {
        setMin(num);
    }

    function updateMax(num) {
        setMax(num);
    }

    function handlechange(num) {
        setRating(num);
    }

    const router = useRouter()

    function handleGo() {

        let url = "/search?";

        if (query) {
            url = url + "q=" + query;
        }
        if (min) {
            url = url + "&min=" + min;
        }
        if (max) {
            url = url + "&max=" + max;
        }

        if (rating) {
            url = url + "&rating=" + rating;
        }

        router.push(url);

    }

    return (

        <div>

            {/* <Header /> */}

            <div className="flex">
                <div className="h-auto w-1/4 border-r-1 p-4 bg-gray-100">
                    <h1 className="text-xl font-semibold mb-4">Filters</h1>
                    <input
                        type="text"
                        name="min"
                        placeholder="Enter min value"
                        value={min}
                        onChange={(e) => { updateMin(e.target.value) }}
                        className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="text"
                        name="max"
                        placeholder="Enter max value"
                        value={max}
                        onChange={(e) => { updateMax(e.target.value) }}
                        className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        onClick={handleGo}
                        className="w-full mb-4 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-400 transition"
                    >
                        Go
                    </button>

                    <select
                        name="rating"
                        id="rating"
                        value={rating}
                        onChange={(e) => { handlechange(e.target.value) }}
                        className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <button
                        onClick={handleGo}
                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-4 rounded-lg transition"
                    >
                        Go
                    </button>
                </div>

                {children}

            </div>
        </div>

    )
}