import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: {
    params: {
        id: string
    }
}) {
    const id = params.id;

    const product = await prismaClient.product.findUnique({
        where: {
            id
        }
    })

    return NextResponse.json({
        success: true,
        data: product
    })
}