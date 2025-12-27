import Image from "next/image";
import ButtonSeeProduct from "../shared/button-see-product";

const backgroundImage = "/assets/shared/mark-two-headphones-back.png";
export default function Presentation() {
    return (
        <section className="bg-very-dark-gray w-full h-[500px] grid place-items-center ds:grid-cols-2 relative overflow-hidden">
            <section className="text-center flex flex-col gap-5 items-center  px-4 max-w-[379px] relative z-1">
                <p className="lorem text-white/50">NEWE PRODUCT</p>                
                <h2 className="h2 text-white">XX99 Mark II HeadphoneS</h2>
                <p className="p text-white/75">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <ButtonSeeProduct url="/headphones" color="orange" />
            </section>
            <figure className="absolute ds:relative ds:w-[700px] inset-0 overflow-hidden">
                <Image className="w-full h-full object-cover scale-140 md:scale-130 opacity-60"  src={backgroundImage} alt="Headphones" width={375} height={400} />

            </figure>
        </section>
    )
}