import Link from "next/link"
import Image from "next/image"
import { IconArrowShop } from "./icons";
import { WrapperProduct } from "./wrapper";
import { Dispatch, SetStateAction } from "react";
const categories = [
    {
        name: "HEADPHONES",
        img: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
        url: "/headphones",
        width: 100,
        height: 104
    },
    {
        name: 'SPEAKERS',
        img: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
        url: "/speakers",
        width: 84,
        height: 101
    },
    {
        img: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
        name: "EARPHONES",
        url: "/earphones",
        width: 103,
        height: 104
    }
]


interface Product {
    name: string;
    img: string;
    url: string;
    width: number;
    height: number;
    
}
function Product({name, img, url, width, height}: Product) {
    return (

        <Link className="md:flex-1 mark" href={`${url}`}>
            
                <section className="bg-very-light-gray relative rounded-lg h-[165px] p-8 flex items-end justify-center">
                    <figure className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2/5 w-fit">
                        <Image className="w-full object-containt" alt={name} src={img} width={width} height={height}/>

                    </figure>
                    <div className="relative text-center">
                        <p className="p text-black uppercase mb-3">{name}</p>
                        <div className="flex items-center justify-center gap-4">
                            <p className="subtitle text-black/50 shop">SHOP</p><IconArrowShop />
                        </div>
                        
                    </div>
                </section>
        </Link>
    )
}
function ProductMenu({name, img, url, width, height, menu}: Product & {menu: Dispatch<SetStateAction<boolean>>;}) {
    return (

        <Link className="md:flex-1 mark" href={`${url}`}>
            
                <section onClick={() => menu(false)} className="bg-very-light-gray relative rounded-lg h-[165px] p-8 flex items-end justify-center">
                    <figure className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2/5 w-fit">
                        <Image className="w-full object-containt" alt={name} src={img} width={width} height={height}/>

                    </figure>
                    <div className="relative text-center">
                        <p className="p text-black uppercase mb-3">{name}</p>
                        <div className="flex items-center justify-center gap-4">
                            <p className="subtitle text-black/50 shop">SHOP</p><IconArrowShop />
                        </div>
                        
                    </div>
                </section>
        </Link>
    )
}

export function Products() {
    return (
        <WrapperProduct>
            <section className="flex flex-col md:flex-row gap-20 md:gap-4 my-[100px]">
                {
                    categories.map((category, index) => (
                        <Product key={index} name={category.name} img={category.img} url={category.url} width={category.width} height={category.height} />
                    ))
                }

            </section>
        </WrapperProduct>
    )
}

export function ProductsMenu({menu}: {menu: Dispatch<SetStateAction<boolean>>}) {
    return (
        <section className="flex flex-col md:flex-row gap-20 md:gap-4">
                {
                    categories.map((category, index) => (
                        <ProductMenu menu={menu} key={index} name={category.name} img={category.img} url={category.url} width={category.width} height={category.height} />
                    ))
                }

            </section>
    )
}