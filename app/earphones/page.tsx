"use client";
import { useEffect, useState } from "react";
import type { ProductsType, Product } from "@/types/types";
import Device from "@/components/shared/device";
import NameProduct from "@/components/shared/name-product";
import {Products} from "@/components/shared/products";

import Bringing from "@/components/shared/bringing";
export default function Earphones() {
    const [data, setData] = useState<null|ProductsType>(null);
    const [earphones, setEarphones] = useState<null|ProductsType>(null);
  useEffect(() => {
    fetch("/data.json").then((res) => {
        if (res.ok) return res.json();
        setData(null); throw new Error("Not found data");
    }).then(data => setData(data)).catch(() => setData(null));
  }, []);
  useEffect(() => {
    if (data) {
        const hearphones = data.filter((product) => product.category === 'earphones');
        setEarphones(hearphones ?? null);
    }
  }, [data]);
    return (
        <main className="max-w-mobile md:max-w-tablet ds:min-w-desktop ds:max-w-desktop">
              <NameProduct name="EARPHONES" />
              <section className="mt-[70px] md:mt-[100px] flex flex-col gap-[100px]">
                {
                    earphones &&
                    earphones.map((earphone: Product, index: number) => (
                        <Device key={index} category={earphone.category} newDevice={earphone.new} images={earphone.image} name={earphone.name} description={earphone.description} slug={earphone.slug} />

                    ))
                }
              </section>
              <Products />
              <Bringing />
        </main>
    )
}