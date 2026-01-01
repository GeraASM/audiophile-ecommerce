import { IconConfirm } from "./icons"
import Image from "next/image"
export default function SaveCartAnimation({show}: {show: boolean}) {
    
    return (
        <section className={`${show ? "animate-show-modal" : ""} rounded-2xl bg-green-300  w-[220px] p-4 fixed z-10 top-0 left-1/2 -translate-x-1/2 translate-y-[100px]  flex items-center gap-2 justify-between`}>
            <p className="p text-black text-center font-bold">Device save on Cart</p>
            <div className="w-8 h-8 border-2 border-green-700  rounded-full text-center content-center">
                ✔︎
            </div>
        </section>
    )
}