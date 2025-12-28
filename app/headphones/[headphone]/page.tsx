"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {Products} from "@/components/shared/products";
import { WrapperProduct } from "@/components/shared/wrapper";
import Bringing from "@/components/shared/bringing";
import { Feature, InTheBox, Recomendation, Photograph, Device, DescriptionDevice } from "@/components/shared/params/params";
import type { ProductsType, Product } from "@/types/types";

const numberFormat = new Intl.NumberFormat("en-US");
const styleOrange = "bg-moderate-orange text-white hover:bg-soft-orange";

const cartImages: Record<string, string> = {
  "XX59": "/assets/cart/image-xx59-headphones.jpg",
  "XX99 Mark I": "/assets/cart/image-xx99-mark-one-headphones.jpg",
  "XX99 Mark II": "/assets/cart/image-xx99-mark-two-headphones.jpg"
}

import { useCart } from "@/storage/cart";

export default function Information() {
    const router = useRouter();
    const params = useParams();
    const nameDevice = decodeURIComponent(params.headphone as string);
    if (nameDevice === undefined) router.push("/");
    const [data, setData] = useState<null|ProductsType>(null);
    const [deviceInformation, setdeviceInformation] = useState<null|Product>(null);

    const [price, setPrice] = useState<number>(0);
    const [count, setCount] = useState<number>(1);

    const {addToCart} = useCart();
  useEffect(() => {
    fetch("/data.json").then((res) => {
        if (res.ok) return res.json();
        throw new Error("Not found data");
    }).then(data => setData(data)).catch(() => setData(null));
  }, []);
  useEffect(() => {
    if (data) {
        const device = data.find((product) => product.slug === nameDevice);
        if (device) {
          setPrice(device.price ?? 0);
        }
  
        setdeviceInformation(device ?? null);
    }
  }, [data, nameDevice]);

  useEffect(() => {
    if (price > 0 && deviceInformation) {
      setPrice(count * deviceInformation?.price!);
    }
  }, [count]);


  const saveCart = () => {
    const slug = deviceInformation?.slug as string;
    const name = deviceInformation?.name!.replace("Headphones", "").trim() as string;
    const image = cartImages[name];
    console.log("Slug: ", slug);
    console.log("Name: ", name);
    console.log("Image: ", image);
    console.log("Count: ",count);
    console.log("Price: ", price);
    addToCart({slug, name, image, count, price, priceOriginal: deviceInformation?.price!});
  }

    return (
        <main className="max-w-mobile md:max-w-tablet ds:min-w-desktop ds:max-w-desktop py-4">
          <WrapperProduct>
            <button className="p text-black/50 cursor-pointer" onClick={() => router.back()}>
              Go Back
            </button>
          </WrapperProduct>
  
          <WrapperProduct>
            <section className="flex flex-col gap-20 mt-5 mb-35">
              {
                deviceInformation &&
                <>
                  {/* BLOCK 1 */}
                <section className="md:flex md:gap-[69px] ds:gap-25 items-center">  
                    <Device isDescription={true} newDevice={deviceInformation.new} category={deviceInformation.category} images={deviceInformation.image} name={deviceInformation.name} description={deviceInformation.description} />
                    <section className="ds:w-[446px]">
                      <DescriptionDevice isDescription={true} newDevice={deviceInformation.new} category={deviceInformation.category} images={deviceInformation.image} name={deviceInformation.name} description={deviceInformation.description} />
                      <section className="flex flex-col gap-6 mt-6">
                        <p className="price">$ {numberFormat.format(price)}</p>
                        <section className="flex gap-4">
                          <div className="flex items-center bg-very-light-gray w-[120px]">
                            <button onClick={() => setCount((prev) => {
                              if (prev === 1) return 1;
                              return prev - 1;
                            })} className="grow text-black/25 cursor-pointer">-</button>
                            <p className="p font-bold">{count}</p>
                            <button onClick={() => setCount((prev) => {
                              return prev + 1;
                            })} className="grow text-black/25 cursor-pointer">+</button>
                          </div>
                          <button onClick={saveCart} className={`cursor-pointer transition-colors subtitle w-[160px] h-12 ${styleOrange} `}>ADD TO CART</button>
                          
                        </section>
                      </section>
                    </section>

                </section>
                {/* BLOCK 2 */}
                <section className="flex flex-col gap-4 md:gap-30 ds:flex-row ds:gap-4">
                  <Feature description={deviceInformation?.description ?? ""} />
                  <InTheBox includes={deviceInformation?.includes ?? []}  />
                </section>
                
                {/* BLOCK 3 */}
                <section>
                    <section className="grid gap-4 ds:gap-[30px] md:grid-cols-2 md:grid-rows-2">
                            <div className="md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2">
                              <Photograph images={deviceInformation?.gallery.first!} name={deviceInformation?.name!} />
                            </div>
                            <div className="md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-2">
                              <Photograph images={deviceInformation?.gallery.second!} name={deviceInformation?.name!} />
                            </div>
                            <div className="md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-3">
                              <Photograph images={deviceInformation?.gallery.third!} name={deviceInformation?.name!} />
                            </div>

                    </section>
                </section>
        
                  {/*  BLOCK 4 */}
                <section>
                  <h5 className="h5 text-center mb-[40px]">YOU MAY ALSO LIKE</h5>
                  <section className="flex flex-col gap-14 md:flex-row ds:gap-[30px]">
                    {
                      deviceInformation?.others.map(({name, image, slug}, index: number) => (
                        <Recomendation key={index} images={image} name={name} slug={slug} />
                      ))  
                    }
                  </section>

                </section>
                
                </>
              }

            </section>
          </WrapperProduct>
              
          <Products />
          <Bringing />
        </main>
    )
}