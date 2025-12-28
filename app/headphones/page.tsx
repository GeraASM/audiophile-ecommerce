"use client";
import { useEffect, useState } from "react";
import type { ProductsType, Product } from "@/types/types";
import Device from "@/components/shared/device";
import NameProduct from "@/components/shared/name-product";
import {Products }from "@/components/shared/products";

import Bringing from "@/components/shared/bringing";
export default function Headphones() {
    const [data, setData] = useState<null|ProductsType>(null);
    const [headphones, setHeadphones] = useState<null|ProductsType>(null);
  useEffect(() => {
    fetch("/data.json").then((res) => {
        if (res.ok) return res.json();
        setData(null); throw new Error("Not found data");
    }).then(data => setData(data)).catch(() => setData(null));
  }, []);
  useEffect(() => {
    if (data) {
        const headphones = data.filter((product) => product.category === 'headphones');
        console.log(headphones);
        setHeadphones(headphones ?? null);
    }
  }, [data]);
    return (
        <main className="max-w-mobile md:max-w-tablet ds:min-w-desktop ds:max-w-desktop">
              <NameProduct name="HEADPHONES" />
              <section className="mt-[70px] md:mt-[100px] flex flex-col gap-[100px]">
                {
                    headphones &&
                    headphones.map((headphone: Product, index: number) => (
                        <Device key={index} slug={headphone.slug} category={headphone.category} newDevice={headphone.new} images={headphone.image} name={headphone.name} description={headphone.description} />

                    ))
                }
              </section>
              <Products />
              <Bringing />
        </main>
    )
}