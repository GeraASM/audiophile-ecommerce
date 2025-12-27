import Link from "next/link"
interface SeeProduct {
    url: string;
    color: "orange" | "black" | "transparent";
}

const styleOrange = "bg-moderate-orange text-white hover:bg-soft-orange";
const styleBlack = "bg-black text-white hover:bg-[#4C4C4C]";
const styleTransaparent = "bg-transparent text-black border border-black hover:bg-black hover:text-white";
export default function ButtonSeeProduct({url, color}: SeeProduct) {
    return <Link href={url}><button className={`cursor-pointer transition-colors subtitle w-[160px] h-[48px] ${color === "orange" ? styleOrange : color === "black" ? styleBlack : color === 'transparent' ? styleTransaparent : ""}`}>SEE PRODUCT</button></Link>
}