//@ts-nocheck
import prismaClient from "@/services/prisma";

export async function getProducts() {
    try {
        const data = await prismaClient.product.findMany();
        return data;
    } catch (err) {
        console.log(err.message)
    }
}