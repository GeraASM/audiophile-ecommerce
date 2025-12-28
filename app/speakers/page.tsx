"use client";
import { useEffect, useState } from "react";
import type { ProductsType, Product } from "@/types/types";
import Device from "@/components/shared/device";
import NameProduct from "@/components/shared/name-product";
import {Products }from "@/components/shared/products";

import Bringing from "@/components/shared/bringing";
export default function Speakers() {
    const [data, setData] = useState<null|ProductsType>(null);
    const [speakers, setSpeakers] = useState<null|ProductsType>(null);
  useEffect(() => {
    fetch("/data.json").then((res) => {
        if (res.ok) return res.json();
        setData(null); throw new Error("Not found data");
    }).then(data => setData(data)).catch(() => setData(null));
  }, []);
  useEffect(() => {
    if (data) {
        const speakers = data.filter((product) => product.category === 'speakers');
        setSpeakers(speakers ?? null);
    }
  }, [data]);
    return (
        <main className="max-w-mobile md:max-w-tablet ds:min-w-desktop ds:max-w-desktop">
              <NameProduct name="SPEAKERS" />
              <section className="mt-[70px] md:mt-[100px] flex flex-col gap-[100px]">
                {
                    speakers &&
                    speakers.map((speaker: Product, index: number) => (
                        <Device key={index} slug={speaker.slug} category={speaker.category} newDevice={speaker.new} images={speaker.image} name={speaker.name} description={speaker.description} />

                    ))
                }
              </section>
              <Products />
              <Bringing />
        </main>
    )
}