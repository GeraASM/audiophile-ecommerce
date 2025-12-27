import Image from "next/image"
import {Wrapper }from "./wrapper"
const beastGear = {
    mobile: "/assets/shared/mobile/image-best-gear.jpg",
    tablet: "/assets/shared/tablet/image-best-gear.jpg",
    desktop: "/assets/shared/desktop/image-best-gear.jpg",
}
export default function Bringing() {
    return (
        <Wrapper>
            <section className="ds:flex ds:flex-row-reverse ds:items-center ds:justify-between">
                <figure className="h-[300px] ds:min-h-[588px] rounded-lg overflow-hidden">
                    <picture>
                        <source media="(min-width: 1440px)" srcSet={beastGear.desktop} />
                        <source media="(min-width: 768px)" srcSet={beastGear.tablet} />
                        <Image className="w-full h-full" src={beastGear.mobile} alt={"Bringing"} width={327} height={300} />
                    </picture>
                </figure>
                <section className="text-center ds:text-start mt-10  md:max-w-[573px] mx-auto ds:m-0 xl:max-w-[445px]">
                    <h4 className="h4  text-black uppercase mb-10">Bringing you the <span className="text-moderate-orange">best</span> audio gear</h4>
                    <p className="p px-1 text-black/50">
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </p>
                </section>
            </section>
        </Wrapper>
    )
}