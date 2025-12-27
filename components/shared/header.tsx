"use client";
import Link from "next/link"
import { IconMenu, IconCart, IconLogo } from "./icons"
import { ItemLi } from "./footer"
import Cart from "@/components/cart/cart";
import { useState } from "react";
export default function Header() {
    const [showCart, setShowCart] = useState<boolean>(false);

    return (
        <>
            {
                showCart &&
                <Cart showCart={setShowCart} />
            }
            <header className="w-full bg-very-dark-gray h-[92px]  px-7 md:px-10 xl:px-30 relative z-10">
                <nav className="flex items-center justify-between md:justify-start xl:justify-between gap-10 relative h-full w-full">
                    <button className="p-2 ds:hidden"><IconMenu /></button>
                    <Link className="mr-auto xl:mr-0" href={"/"}>
                        <IconLogo />
                    </Link>
                    <nav className="subtitle text-white hidden ds:block">
                        <ul className="flex gap-10">
                            <ItemLi>
                                <Link href="/">HOME</Link>
                            </ItemLi>
                            <ItemLi>
                                <Link href="/headphones">HEADPHONES</Link>
                            </ItemLi>
                            <ItemLi>
                                <Link href="/speakers">SPEAKERS</Link>
                            </ItemLi>
                            <ItemLi>
                                <Link href="/earphones">EARPHONES</Link>
                            </ItemLi>
                        </ul>
                    </nav>
                    <button onClick={() => setShowCart(!showCart)} className="p-2"><IconCart /></button>
                    <div className="h-px w-full absolute bottom-0 bg-white/10"></div>

                </nav>
            </header>
        </>
    )
}