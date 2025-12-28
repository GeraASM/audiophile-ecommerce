"use client";
import { useCart } from "@/storage/cart";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import type { CartProduct } from "@/types/types";
const styleOrange = "bg-moderate-orange text-white hover:bg-soft-orange";
import { useRouter } from "next/navigation";
function Device ({device}: {device: CartProduct}) {
    const {addToCart, removeDevice} = useCart();
    const [count, setCount] = useState<number>(1);
    const [price, setPrice] = useState<number>(0);

    useEffect(() => {
        setCount(device.count);
        setPrice(device.price);
    }, []);

     useEffect(() => {
        if (price > 0) {
            setPrice(count * device?.priceOriginal!);
            updateStorage();
        }
      }, [count]);



      const updateStorage = () => {
        if (count === 0) {
            console.log("Delete device");
            return
        }
         if (price === 0) return;
        const slug = device.slug as string;
        const name = device.name as string;
        const priceFinal = count * device.priceOriginal;
        const countFinal = count;
        const image = device.image;
        addToCart({slug, name, price: priceFinal, count: countFinal, image, priceOriginal: device.priceOriginal});
      }


      const incrementCart = () => {
        setCount((prev) => prev + 1);
      }
       const reduceCountDevice = () => {
        setCount((prev) => {
            if (prev > 1) {
                return prev - 1;
            }
            if (prev === 1) {
                removeDevice(device.slug);
            }
            return 0;

            
        })
      }
    return (
        <section className="flex items-center gap-4">
            <Image src={device.image} alt={device.name} width={64} height={64} className="rounded-lg" />
            <div>
                <p className="p text-black font-bold">{device.name}</p>
                <p className="text-black/50 font-bold leading-body text-[14px] ">$ {price.toLocaleString("en-US")}</p>
            </div>
            <div className="ml-auto flex items-center bg-very-light-gray w-[96px] h-[32px]">
                <button onClick={reduceCountDevice} className="grow text-black/25 cursor-pointer">-</button>
                <p className="p font-bold">{count}</p>
                <button onClick={incrementCart} className="grow text-black/25 cursor-pointer">+</button>
            </div>
        </section>
    )
}


export default function Cart({showCart}: {showCart: Dispatch<SetStateAction<boolean>>}) {
    const router = useRouter();
    const {removeCart, cart} = useCart();
    
    const products = Object.values(cart) || [];

    const total = products.reduce((acc, device) => acc + device.price , 0) || 0;

    const checkout = () => {
        showCart(false);
        router.push("/checkout");
    }
    
    return (
        <>
            <div className="fixed inset-0 bg-black/50 z-1"></div>
            <section className="fixed left-1/2 top-1/2 -translate-1/2 md:left-auto md:right-[20px] xl:right-[140px] md:top-[110px] md:translate-0  rounded-lg bg-white z-11 w-[330px] h-[488px] p-6 flex flex-col gap-8">
                <div className="flex justify-between items-center">
                    <p className="price">CART ({products.length})</p>
                    <button onClick={() => {
                        removeCart();
                        showCart(false);
                    }} className="underline">Remove all</button>
                </div>
                {/* DEVICES */}
                <section className="flex flex-col gap-4">
                        {
                            products.length > 0 &&
                            products.map((device, index: number) => (
                                <Device key={index} device={device} />
                            ))
                        }
                    
                </section>
                {/* CHECKOUT */}
                <section className="mt-auto flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <p className="text-black/50 p">TOTAL</p>
                        <p className="price">$ {total.toLocaleString("en-US")}</p>
                    </div>
                   
                    <button onClick={checkout} disabled={products.length === 0 || total === 0} className={`disabled:bg-moderate-orange/20 cursor-pointer transition-colors subtitle w-full h-[48px] ${styleOrange}`}>CHECKOUT</button>
                    
                </section>
            </section>
        </>
    )
}