import Image from "next/image";
import ButtonSeeProduct from "../shared/button-see-product";
const speakerImg = "/assets/shared/desktop/image-category-thumbnail-speakers.png";
export default function SpeakerZx9() {
    return (
        <section>
            <section className="bg-moderate-orange rounded-lg h-[600px] p-1 ds:p-0 relative overflow-hidden ds:flex ds:items-center md:h-[720px]">
                <div className="ds:hidden absolute border border-white/30 w-[600px] md:w-[720px] h-[600px] md:h-[720px] -top-1/4 left-1/2 -translate-x-1/2 rounded-full"></div>
                <div className="ds:hidden border border-white/30 rounded-full h-[319px] md:h-[460px] md:w-[460px] md:-mt-[80px] md:mx-auto p-10">
                    <div className="border border-white/30 rounded-full h-full w-full px-10 grid place-items-center">
                        <Image src={speakerImg} alt="speaker" width={172} height={207} className="block object-contain mx-auto translate-y-[30px] scale-150" />
                    </div>
                </div>
                <figure className="hidden ds:block w-3/5 h-full translate-y-2/7 scale-120">
                    <Image src={speakerImg} alt="speaker" width={172} height={207} className="w-full h-full mt-1/2 block object-contain" />
                </figure>
                <div className="w-[280px] mx-auto ds:mx-0 text-center ds:text-start flex flex-col gap-4 md:gap-8 relative md:-mt-[90px] ds:mt-0 md:w-[349px]">
                    <h2 className="h2 text-white">ZX9 <br /> SPEAKER</h2>
                    <p className="p text-white/75">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <ButtonSeeProduct color="black" url="/speakers" />

                </div>
            </section>

        </section>
    )
}