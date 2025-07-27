//@ts-nocheck
import prismaClient from "@/services/prisma"

export default async function ProductPage(){

    const data = await prismaClient.product.findMany({
            where : {
                title: {
                    contains : "g"
                }
            }
    });

    return(
        <div>
            {
                data.map((item)=>{
                    return(
                        <li key={item.id}>{item.title}</li>
                    )
                })
            }
        </div>
    )
}