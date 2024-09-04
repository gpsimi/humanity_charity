import React from 'react'
import AboutHero from '@/components/sections/AboutSection/AboutHero'
import AboutAbout from '@/components/sections/AboutSection/AboutAbout'
import AboutBrands from '@/components/sections/AboutSection/AboutBrands'
import GoalAndMission from '@/components/sections/AboutSection/GoalAndMission'
import HomeTeam from '@/components/sections/HomeSection/HomeTeam'

const AboutUs = () => {
  return (
    <section className="flex size-full flex-col">
      <AboutHero />
      <AboutAbout />
      <AboutBrands />
      <GoalAndMission />
      {/* <HomeTeam /> */}

    </section>
  )
}

export default AboutUs