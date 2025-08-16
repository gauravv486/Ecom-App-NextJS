//@ts-nocheck
'use client'
import { useState } from "react"
import {  login, signup } from "@/lib/action";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {

    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});

    async function validateSubmit(event) {
        event.preventDefault();
        const errorObj = {};

        if (name.length < 5) {
            errorObj.name = "Name must be at least 3 characters";
        }

        if (!email.includes("@explorin.io")) {
            errorObj.email = "Email must be in format example@explorin.io";
        }

        if (password.length < 6) {
            errorObj.password = "Password length should be minimum of 6";
        }

        if (errorObj.name || errorObj.email || errorObj.password) {
            setError(errorObj);
            return;
        } else {
            const obj = {
                email: email,
                password: password
            }
            const res = await login(obj);
            if (res.success) {
                router.push('/');
            } else {
                errorObj.msg = res.message;
                setError(errorObj);
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black/10 px-4">
            <form
                onSubmit={validateSubmit}
                className="bg-white w-full max-w-md p-10 rounded-3xl shadow-2xl flex flex-col gap-5 "
            >
                <h2 className="text-3xl font-bold text-black text-left tracking-tight mb-2">Login</h2>
                {/* Align with caption in image */}
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="First Name"
                        className="w-full px-5 py-3 bg-white border border-black rounded-xl text-black placeholder:text-gray-600 focus:outline-none "
                    />
                    {error.name && (
                        <p className="text-red-500 text-xs mt-2 font-medium">{error.name}</p>
                    )}
                </div>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full px-5 py-3 bg-white border border-black rounded-xl text-black placeholder:text-gray-600 focus:outline-none "
                    />
                    {error.email && (
                        <p className="text-red-500 text-xs mt-2 font-medium">{error.email}</p>
                    )}
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full px-5 py-3 bg-white border border-black rounded-xl text-black placeholder:text-gray-600 focus:outline-none "
                    />
                    {error.password && (
                        <p className="text-red-500 text-xs mt-2 font-medium">{error.password}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full bg-black text-white font-bold py-3 rounded-xl text-lg shadow-none hover:text-white transition mb-2"
                >
                    Login
                </button>
                {error.msg && (
                    <p className="text-red-500 text-xs mt-2 font-medium">{error.msg}</p>
                )}
                {/* Divider with lines and 'Or' */}
                <div className="flex items-center gap-2 my-3">

                    <div>Don't have account ! <span className="text-blue-400"> <Link href={"/signup"}>Signup</Link></span></div>
                </div>

            </form>
        </div>
    );
}
