import Image from "next/image"
import ButtonSeeProduct from "./button-see-product";
import {WrapperProduct} from "./wrapper";

interface Device {
    images: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    name: string;
    description: string;
    category: string;
    newDevice: boolean;
    isDescription?: boolean;
    slug: string;

}
export default function Device({images, name, description, category, newDevice, isDescription=false, slug}: Device) {
    return (
         <WrapperProduct>
            <section className={`ds:flex ds:items-center gap-[100px]`}>
                <figure className={`${isDescription ? "h-[327px]" : "h-[352px]"} bg-very-light-gray rounded-lg overflow-hidden ds:min-w-[540px] ds:h-[560px]`}>
                    <picture>
                        <source media="(min-width: 1440px)" srcSet={images.desktop} />
                        <source media="(min-width: 768px)" srcSet={images.tablet} />
                        <Image className="w-full h-full object-contain block md:scale-180 xl:scale-100" src={images.mobile} alt={name} width={220} height={243} />

                    </picture>

                </figure>
                <section className={`flex flex-col gap-6  ds:items-start ${isDescription ? "text-start items-start" : "text-center items-center"} ds:text-start mt-6 md:mt-14 ds:m-0 max-w-[572px] mx-auto`}>
                    {
                        newDevice &&
                        <p className="lorem">NEW PRODUCT</p>

                    }
                    <h4 className="h4 max-w-[200px] md:max-w-[360px]">{name}</h4>
                    <p className="p text-black/50">{description}</p>
                    {
                        !isDescription &&
                        <ButtonSeeProduct color="orange" url={`/${category}/${slug}`} />
                    }
                </section>
            </section>
         </WrapperProduct>
    )
}