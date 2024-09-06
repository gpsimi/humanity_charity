import React from "react";
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
} from "@/components/sections/HomeSection"  


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
