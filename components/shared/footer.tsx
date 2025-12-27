import { IconLogo, IconTwitter, IconInstagram, IconFacebook } from "./icons"
import Link from "next/link"
export const ItemLi = ({children}: {children: React.ReactNode}) => <li className="hover:text-moderate-orange cursor-pointer">{children}</li>
export default function Footer() {
    return (
        <footer className="w-full bg-very-dark-gray relative text-white px-6 md:px-10 xl:px-30 pb-10 ds:pb-20 flex flex-col gap-10 ds:gap-16 items-center md:items-start text-center md:text-start">
            <div className="w-[100px] h-1 bg-moderate-orange"></div>
            <div className="flex flex-col items-center md:items-start gap-10 ds:flex-row w-full justify-between">
                <Link href="/"><IconLogo /></Link>
                <nav className="subtitle text-white">
                    <ul className="flex flex-col gap-2 md:flex-row md:gap-10">
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

            </div>
            <section className="flex flex-col ds:flex-row gap-10 ds:justify-between w-full">
                <div className="flex flex-col gap-10">
                    <p className="p opacity-50 max-w-[540px]">
                        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.
                    </p>
                    <p className="hidden p font-bold opacity-50 ds:block">
                            &copy; 2021. All Rights Reserved
                    </p>
                    <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between w-full ds:hidden">
                        <p className="p font-bold opacity-50">
                            &copy; 2021. All Rights Reserved
                        </p>
                        <div className="flex gap-4 items-center ">
                            <IconFacebook />
                            <IconTwitter />
                            <IconInstagram />
                        </div>
                    </div>

                </div>
                <div className="hidden ds:flex gap-4 items-center ">
                            <div className="icon cursor-pointer p-1">
                                <IconFacebook />
                            </div>
                            <div className="icon cursor-pointer p-1">
                                <IconTwitter />
                            </div>
                            <div className="icon cursor-pointer p-1">
                                <IconInstagram />
                            </div>
                        </div>

            </section>
        </footer>
    )
}