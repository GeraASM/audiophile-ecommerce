import Image from "next/image"
import ButtonSeeProduct from "../shared/button-see-product"
const speakerImages = {
    mobile: "/assets/product-zx7-speaker/mobile/image-gallery-3.jpg",
    tablet: "/assets/product-zx7-speaker/tablet/image-gallery-3.jpg",
    desktop: "/assets/product-zx7-speaker/desktop/image-gallery-3.jpg",
}
export default function SpeakerZx7() {
    return (
         <section>
                    <section className="bg-very-light-gray rounded-lg h-[320px] p-8 md:p-20 relative overflow-hidden flex items-center">
                        <figure className="absolute top-0 right-0 inset-0">
                            <picture>
                                <source media="(min-width: 1440px)" srcSet={speakerImages.desktop} />
                                <source media="(min-width: 768px)" srcSet={speakerImages.tablet} />
                                <Image src={speakerImages.mobile} className="object-contain h-auto rotate-y-180 md:w-1/2 block ml-auto" alt={"Speaker"} width={400} height={527} />
                            </picture>

                        </figure>
        
                        <div className="w-[204px] flex flex-col gap-4 relative">
                            <h4 className="h4 text-black">ZX7 SPEAKER</h4>
                            
                            <ButtonSeeProduct color="transparent" url="/speakers" />
        
                        </div>
                    </section>
        
                </section>
    )
}