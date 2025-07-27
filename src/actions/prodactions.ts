'use server'

import prismaClient from "@/services/prisma"

export default async function addProductTodb(productData : any){
    try{
        const product  = await prismaClient.product.create({
            data : productData
        })
        return{
            success : true, 
            data : product
        };
    }catch(err){
        return{
            success : false ,
            message : "something wrong happened."
        }
    }
}
