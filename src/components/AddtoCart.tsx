//@ts-nocheck
'use client'
import products from "@/constants/product";
import { CartContext } from "@/contexts/CartContex";
import { useContext, useEffect, useState } from "react";


export default function AddtoCart({ item }) {

    const { cart, setCart } = useContext(CartContext);
    const [inCart, setInCart] = useState(false);

    useEffect(() => {

        // let prevItems = localStorage.getItem('cart');
        // prevItems = prevItems ? JSON.parse(prevItems) : [];

        const existingItem = cart.find((elem) => elem.id == item.id);

        if (existingItem) setInCart(true);

    }, [])


    function handleAdd() {


        const copy = [...cart];

        const existingItem = copy.find((elem) => (item.id == elem.id));
        if (existingItem) {
            existingItem.quantity = existingItem.quantity + 1;
        }
        else {
            const itemtoadd = {
                ...item,
                quantity: 1
            }
            copy.push(itemtoadd);
        }
        setCart(copy);

    }

    return (

        <div>
            {
                <button onClick={handleAdd}>Add to Cart </button>
            }
        </div>
    )
}