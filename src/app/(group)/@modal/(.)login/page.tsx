// @ts-nocheck
'use client'

import {  useEffect, useState } from "react";

import { handleSubmit } from "@/action";
import {  useRouter } from "next/navigation";

export default function Login() {

    const router = useRouter();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = "" }
    }, [])

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [error, setError] = useState({});


    async function handleinterceptedsubmit(e) {
        e.preventDefault();
        const errorobject = {};

        if (name.length < 3) {
            errorobject.name = "The name should be of minimum 4 letters";
        }

        if (!email.includes("@explorin.io")) {
            errorobject.email = "Email must be in format example@explorin.io";
        }

        if (password.length < 6) {
            errorobject.password = "Password length should be minimum of 6";
        }

        if (errorobject.name || errorobject.email || errorobject.password) {
            setError(errorobject);
            return;
        } else {
            const obj = {
                name: name,
                email: email,
                password: password
            }
            const res = await handleSubmit(obj);
            if (res.success) {
                router.back(); 
            } else {
                errorobject.msg = res.message;
                setError(errorobject);
            }
        }
    }

    return (

        <div className="fixed flex justify-center items-center bg-black/20 inset-0 z-50" onClick={router.back()}>

            <div className="absolute  z-20 h-auto w-100 align-middle bg-white rounded-2xl flex flex-col items-center justify-center shadow-2xl opacity-0.8">
                <form
                    onSubmit={handleinterceptedsubmit}
                    // action={handleinterceptedsubmit}
                    className="w-full max-w-md flex flex-col space-y-6 px-8 py-10"
                >
                    <h2 className="text-3xl font-semibold text-black mb-2">Sign Up</h2>

                    <input
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="w-full bg-transparent border border-[#313135] rounded-xl text-gray-900 px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-gray-500"
                    />
                    {error.name && (
                        <p className="text-red-500 text-xs mt-2 font-medium">{error.name}</p>
                    )}
                    {/* <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full bg-transparent border border-[#313135] rounded-xl text-gray-900 px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-gray-500"
                    /> */}
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="w-full bg-transparent border border-[#313135] rounded-xl text-gray-900 px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-gray-500"
                    />
                    {error.email && (
                        <p className="text-red-500 text-xs mt-2 font-medium">{error.email}</p>
                    )}
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className="w-full bg-transparent border border-[#313135] rounded-xl text-gray-900 px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-gray-500"
                    />
                    {error.password && (
                        <p className="text-red-500 text-xs mt-2 font-medium">{error.password}</p>
                    )}
                    <button
                        className="w-full bg-white text-black text-lg font-semibold rounded-full py-3 transition hover:bg-gray-200 mt-1"
                    >
                        Log In
                    </button>
                    <div className="flex items-center my-3">
                        <div className="flex-grow h-0.5 bg-[#313135]" />
                        <span className="mx-3 text-gray-500 text-sm">Or</span>
                        <div className="flex-grow h-0.5 bg-[#313135]" />
                    </div>
                    <div className="flex gap-4">
                        <button type="button" className="flex-1 bg-[#212124] text-gray-200 rounded-xl py-2 font-medium transition hover:bg-[#29292e]">
                            Google
                        </button>
                        <button type="button" className="flex-1 bg-[#212124] text-gray-200 rounded-xl py-2 font-medium transition hover:bg-[#29292e]">
                            Facebook
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
