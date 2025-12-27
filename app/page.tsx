import Presentation from "@/components/home/presentation";
import Products from "@/components/shared/products";
import SpeakerZx9 from "@/components/home/speaker-zx9";
import SpeakerZx7 from "@/components/home/speaker-zx7";
import EarphonesYx1 from "@/components/home/earphones-yx1";
import Bringing from "@/components/shared/bringing";
export default function Home() {
  
  return (
    <main className="max-w-mobile md:max-w-tablet ds:min-w-desktop ds:max-w-desktop">
      <Presentation />
      <Products />
      <section className="flex flex-col gap-6">
        <SpeakerZx9 />
        <SpeakerZx7 />
        <EarphonesYx1 />
      </section>
      <Bringing />
    </main>
  );
}
