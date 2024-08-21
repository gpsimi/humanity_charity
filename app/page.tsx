
import HomeAbout from "@/components/sections/HomeSection/HomeAbout";
import HomeCauses from "@/components/sections/HomeSection/HomeCauses";
import HomeHero from "@/components/sections/HomeSection/HomeHero";
import HomeProjects from "@/components/sections/HomeSection/HomeProjects";
import HomeTestimonials from "@/components/sections/HomeSection/HomeTestimonials";
import HomeVolunteer from "@/components/sections/HomeSection/HomeVolunteer";
import HomeWhatWeDo from "@/components/sections/HomeSection/HomeWhatWeDo";
import HomeSponsors from "@/components/sections/HomeSection/HomeSponsors";


           


export default function Home() {
  return (
    <section className="flex size-full flex-col">
      <HomeHero />
      <HomeAbout />
      <HomeCauses />
      <HomeVolunteer />
      <HomeWhatWeDo />
      <HomeProjects />
      <HomeTestimonials />
      <HomeSponsors />
    </section>
  );
}
