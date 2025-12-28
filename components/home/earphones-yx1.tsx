import Image from "next/image"
import ButtonSeeProduct from "../shared/button-see-product"
const earphonesImages = {
    mobile: "/assets/product-yx1-earphones/mobile/image-gallery-2.jpg",
    tablet: "/assets/product-yx1-earphones/tablet/image-gallery-2.jpg",
    desktop: "/assets/product-yx1-earphones/desktop/image-gallery-2.jpg",
}
const earphonesImage = "/assets/product-yx1-earphones/mobile/image-gallery-2.jpg"
export default function EarphonesYx1() {
    return (
        <section>
            <section className="flex flex-col md:flex-row gap-4 ds:gap-10 md:h-[320px]">
                <figure className="h-[200px] md:h-auto w-full md:w-auto rounded-lg overflow-hidden md:min-w-[340px] flex-1">
                    <picture>
                        <source media="(min-width: 768px)" srcSet={earphonesImages.tablet} />
                        <source media="(min-width: 1440px)" srcSet={earphonesImages.desktop} />
                        <Image src={earphonesImages.mobile} alt={"earphonesyx1"} width={327} height={200} className="w-full h-full" />
                    </picture>
                </figure>

                <div className="bg-very-light-gray rounded-lg flex flex-col md:justify-center gap-4 h-[200px] md:h-auto md:w-auto p-8 md:p-10 flex-1">
                    <h4 className="h4 text-black mb-3 md:mb-1">YX1 EARPHONES</h4>
                    <ButtonSeeProduct color="transparent" url="/earphones" />

                </div>
            </section>

        </section>
    )
}