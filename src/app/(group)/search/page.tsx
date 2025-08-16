//@ts-nocheck
import Cards from "@/components/Card";
import Header from "@/components/Header";

export function generateMetadata({ searchParams }) {
    const searchTerm = searchParams.q;
    return {
        title: "Search Pages: " + searchTerm,
        description: "hello product"
    }
}

export default async function SearchPage({ searchParams }) {

    const query = searchParams.q;
    
    const url = 'https://dummyjson.com/products/search?q=' + query;
    const response = await fetch(url);
    const data = await response.json();

    // let url = 'http://localhost/api/search/'

    // if(query){
    //     url += '?q=' + query ;
    // }
    
    const min = searchParams.min;
    const max = searchParams.max;
    const rating = searchParams.rating;

    let results = data?.products || [];

    // let results = data.filter((item) => {
    //     if (item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) return true;
    // })

    if (min) {
        results = results.filter((item) => {
            if (item.price > min) return true;
        })
    }

    if (max) {
        results = results.filter((item) => {
            if (item.price < max) return true;
        })
    }

    if (rating) {
        results = results.filter((item) => {
            if (item.rating > rating) return true;
        })
    }

    return (
        <div className="min-h-screen w-screen bg-gray-100">
            <h1 className="text-2xl font-semibold text-center text-gray-800 mt-6 mb-4">
                Here is my search: <span className="text-blue-600">{query}</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-6 px-4 w-full">

                {
                    results.length == 0 && <div>
                        <h2> No search results found for : {query} </h2>
                    </div>
                }

                {
                    results?.map((item) => {
                        return (
                            <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <Cards item={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}