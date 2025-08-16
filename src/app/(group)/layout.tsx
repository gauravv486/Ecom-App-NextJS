//@ts-nocheck

import Addprobutton from "@/components/Addprodbutton";
import Header from "@/components/Header";
import { getUserFromToken } from "@/lib/action";
import { Theme } from "@radix-ui/themes";
import { cookies } from "next/headers";

export default async function Page({ children, modal }) {

    const token = cookies().get('token')?.value;
    let user = await getUserFromToken(token);

    return (
        <div>
            <Theme>
                <Header user={user}/>
                {modal}
                {children}
            </Theme>
        </div>
    )
}