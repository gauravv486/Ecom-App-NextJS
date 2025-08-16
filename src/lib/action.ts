//@ts-nocheck
'use server'
import { redirect } from "next/navigation"
import prismaClient from "../services/prisma"
import { generateToken, verifyToken } from "../services/jwt"
import { cookies } from "next/headers"
import { use } from "react"

export async function signup(obj) {
    try {
        const userdata = await prismaClient.user.create({
            data: obj
        })

        const token = generateToken({
            email: userdata.email
        });

        const cookieStore = await cookies();
        cookieStore.set("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60
        })

        return {
            success: true,
            userdata: userdata
        }

    } catch (err) {
        return {
            success: false,
            message: err.message,
        };
    }
}

export async function login(data) {
    
    const userData = await prismaClient.user.findUnique({
        where: {
            email: data.email,
        }
    })

    const token = generateToken({
        email: userData?.email,
    })

    const cookieStore = await cookies();
    cookieStore.set('token', token);

    if (!userData) {
        return {
            success: false,
            message: "invalid user please signup"
        }
    }

    if (userData && userData.password != data.password) {
        return {
            success: false,
            message: "Wrong Password"
        }
    }

    else {
        return {
            success: true,
            userData: userData
        }
    }
}

export async function getUserFromToken(token){
    try{
        const user = verifyToken(token);
        return user;
    }catch(err){
       return{
        success : false ,
        message : "something went Wrong"
       }
    }
}

export async function logout(){
    (await cookies()).delete('token');
}