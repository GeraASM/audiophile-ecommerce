"use client";
import Link from "next/link"
import { IconMenu, IconCart, IconLogo } from "./icons"
import { ItemLi } from "./footer"
import Cart from "@/components/cart/cart";
import { useState } from "react";
import {ProductsMenu} from "./products";
import { useCart } from "@/storage/cart";
export default function Header() {
    const [showCart, setShowCart] = useState<boolean>(false);
    const [menu, setMenu] = useState<boolean>(false);
    const {cart} = useCart();

    let countDevice = Object.keys(cart).length;
    return (
        <>
            {
                menu &&
                (
                    <>
                        <div className="z-1 fixed inset-0 bg-black/70 ds:hidden"></div>
                        <section className="fixed z-2 top-[100px] left-0 bg-white w-full p-8 pt-20  rounded-lg ds:hidden max-w-mobile md:max-w-tablet ds:max-w-desktop">
                            <ProductsMenu menu={setMenu} />
                        </section>
                    </>
                )
                
            }
            {
                showCart &&
                <Cart showCart={setShowCart} />
            }
            <header className="w-full bg-very-dark-gray h-[92px]  px-7 md:px-10 xl:px-30 z-10 sticky">
                <nav className="flex items-center justify-between md:justify-start xl:justify-between gap-10 relative h-full w-full">
                    <button onClick={() => setMenu(!menu)} className="p-2 ds:hidden"><IconMenu /></button>
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
                    <button onClick={() => setShowCart(!showCart)} className="p-2 relative">
                        <IconCart />
                        {
                            countDevice > 0 &&
                            <div className="absolute top-[-10px] right-[-10px] rounded-full text-white bg-moderate-orange w-8 h-8 content-center text-center">
                                    <p>{countDevice}</p>
                            </div>
                        }
                    </button>
                    <div className="h-px w-full absolute bottom-0 bg-white/10"></div>

                </nav>
            </header>
        </>
    )
}