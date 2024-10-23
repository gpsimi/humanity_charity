import type { Metadata } from "next";


import React from 'react'
import {
  AboutHero,
  AboutAbout,
  AboutBrands,
  GoalAndMission,
  HomeTeam,
  AboutNewsletter,
} from "@/components/sections/AboutSection"

export const metadata: Metadata = {
  title: "About Us",
  description: "Today is a Good day",
};

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