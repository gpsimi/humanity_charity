import React from 'react'
import {
  AboutHero,
  AboutAbout,
  AboutBrands,
  GoalAndMission,
  HomeTeam,
  AboutNewsletter,
} from "@/components/sections/AboutSection"

const AboutUs = () => {
  return (
    <section className="flex size-full flex-col">
      <AboutHero />
      <AboutAbout />
      <AboutBrands />
      <GoalAndMission />
      <HomeTeam />
      <AboutNewsletter />
    </section>
  )
}

export default AboutUs