//@ts-nocheck

import Addprobutton from "@/components/Addprodbutton";
import Header from "@/components/Header";
import { Theme } from "@radix-ui/themes";

export default function Page({ children, modal }) {
    return (
        <div>
            <Theme>
                <Addprobutton />
                <Header />
                {modal}
                {children}
            </Theme>
        </div>
    )
}