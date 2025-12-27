import Image from "next/image"
import ButtonSeeProduct from "../shared/button-see-product"
export default function SpeakerZx7() {
    return (
         <section className="px-4 md:px-10 xl:px-40">
                    <section className="bg-very-light-gray rounded-lg h-[320px] p-8 md:p-20 relative overflow-hidden flex items-center">
                        {/* <Image className="absolute" /> */}
        
                        <div className="w-[204px] flex flex-col gap-4">
                            <h4 className="h4 text-black">ZX7 SPEAKER</h4>
                            
                            <ButtonSeeProduct color="transparent" url="/speakers" />
        
                        </div>
                    </section>
        
                </section>
    )
}