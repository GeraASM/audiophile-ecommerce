import Image from "next/image";
import ButtonSeeProduct from "../button-see-product";
import type { Include, Images, Device } from "@/types/types";
export function Feature({description}: {description: string}) {
  return (
    <section className="flex flex-col gap-4 ds:max-w-[635px]">
      <h5 className="h5">FEATURE</h5>
      <p className="p text-black/50">{description}</p>
    </section>
  )
}

export function InTheBox({includes}: {includes: Include[] | []}) {

  return (
    <section className="flex flex-col gap-4 md:flex-row md:gap-40 xl:flex-col xl:gap-4">
      <h5 className="h5">IN THE BOX</h5>
      <ul className="flex flex-col">
        {
          includes.map((include, index: number) => (
            <li key={index} className="flex items-center gap-4"><span className="p text-soft-orange font-bold">{include.quantity}x</span> <p className="p text-black/50">{include.item}</p></li>
          ))
        }
      </ul>
    </section>
  )
}

export function Recomendation({images, slug, name}: {images: Images; name: string; slug: string;}) {
  const category = images.mobile.includes("speaker") ? "speakers" : images.mobile.includes("headphones") ? "headphones" : images.mobile.includes("earphones") ? "earphones" : ""; 
  return (
    <section className="flex flex-col gap-8 items-center md:flex-1">
      <figure className="rounded-lg bg-very-light-gray w-full md:min-h-[318px]">
        <picture>
          <source media="(min-width: 1440px)" srcSet={images.desktop} />
          <source media="(min-width: 768px)" srcSet={images.tablet} />
          <Image className="rounded-lg block mx-auto md:mx-0 w-full" src={images.desktop} alt={name} width={140} height={174} />
        </picture>
      </figure>
      <h5 className="h5 text-center">{name}</h5>
      <ButtonSeeProduct url={`/${category}/${slug}`} color="orange" />
    </section>
  )
}

export function Photograph({images, name}: {images: Images; name: string}) {
  return (
    <figure className="h-full bg-very-light-gray rounded-lg">
      <picture>
        <source media="(min-width: 1440px)" srcSet={images.desktop} />
        <source media="(min-width: 768px)" srcSet={images.tablet} />
        <Image className="rounded-lg w-full h-full object-contain" src={images.desktop} alt={name} width={327} height={174} />
      </picture>
    </figure>
  )
}

export function Device({images, name, isDescription=false}: Device) {
    return (
            <section className={`ds:flex ds:items-center gap-[100px] min-w-[281px] md:min-h-[480px] ds:max-w-[540px]`}>
                <figure className={`${isDescription ? "h-[327px] md:h-full" : "h-[352px]"} bg-very-light-gray rounded-lg overflow-hidden ds:min-w-[540px] ds:h-[560px]`}>
                    <picture>
                        <source media="(min-width: 1440px)" srcSet={images.desktop} />
                        <source media="(min-width: 768px)" srcSet={images.tablet} />
                        <Image className="w-full h-full object-contain block md:scale-100" src={images.mobile} alt={name} width={220} height={243} />

                    </picture>

                </figure>
            </section>
    )
}

export function DescriptionDevice ({name, description, category, newDevice, isDescription=false}: Device) {
  return (
    <section className={`flex flex-col gap-6  ds:items-start ${isDescription ? "text-start items-start" : "text-center items-center"} ds:text-start mt-6 md:mt-0 ds:m-0 max-w-[572px]`}>
        {newDevice && <p className="lorem">NEW PRODUCT</p>}
        <h4 className="h4 max-w-[200px] md:max-w-[360px]">{name}</h4>
        <p className="p text-black/50">{description}</p>
        {
            !isDescription &&
            <ButtonSeeProduct color="orange" url={`/${category}/${name}`} />
        }
    </section>
  )
}