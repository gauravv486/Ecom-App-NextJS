//@ts-nocheck
'use client'
import Cards from "@/components/Card";
import { CartContext } from "@/contexts/CartContex";
import { useContext, useEffect, useState } from "react";

export default function Cart() {

    const {cart , setCart} = useContext(CartContext);

    // const [cartItem, setCartItem] = useState([]);

    // useEffect(function() {
    //     let items = localStorage.getItem('cart');
    //     items = items ? JSON.parse(items) : ""
    //     setCartItem(items);
    // }, [])

    function handleClick(idx){
        const temp = cart.filter((item)=>item.id !== idx);
        setCart(temp);
    }

    let totalPrice = 0 ;

    for(let i = 0; i < cart.length ; i++){
        totalPrice += cart[i].price * cart[i].quantity;
    }

    console.log(cart);

    return (
        <main>
            {
                cart.map((item , index) => {
                    return(
                        <div key={index}>
                            <Cards item={item} /> 
                            <h2>
                               Total Price : {totalPrice}
                            </h2>
                            <button className="bg-red-800 text-white" onClick={()=>{handleClick(item.id)}}>Remove</button>
                        </div>
                    )
                })
            }
        </main >
    )
}