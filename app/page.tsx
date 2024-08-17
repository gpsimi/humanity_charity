
import HomeAbout from "@/components/sections/HomeSection/HomeAbout";
import HomeCauses from "@/components/sections/HomeSection/HomeCauses";
import HomeHero from "@/components/sections/HomeSection/HomeHero";


           


export default function Home() {
  return (
    <section className="flex size-full flex-col">
      <HomeHero />
      <HomeAbout />
      <HomeCauses />
    </section>
  );
}
