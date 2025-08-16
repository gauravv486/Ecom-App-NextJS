import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req : Request){
    const res = await prismaClient.product.findMany();
    return NextResponse.json({
        success : true ,
        data : res
    })
}

export async function POST(req : NextRequest){  
    const body = await req.json();
}