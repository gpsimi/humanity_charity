import {
  HomeHero,
  HomeAbout,
  HomeCauses,
  HomeVolunteer,
  HomeWhatWeDo,
  HomeProjects,
  HomeTestimonials,
  HomeSponsors,
  HomeTeam,
  HomeEvents,
  HomeNewsletterAndBlog
} from "@/components/sections/HomeSection/index"


           


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
      <HomeTeam />
      <HomeEvents />
      <HomeNewsletterAndBlog />
    </section>
  );
}
