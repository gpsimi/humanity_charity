import React from 'react'
import AboutHero from '@/components/sections/AboutSection/AboutHero'
import AboutAbout from '@/components/sections/AboutSection/AboutAbout'

const AboutUs = () => {
  return (
    <section className="flex size-full flex-col">
      <AboutHero />
      <AboutAbout />

    </section>
  )
}

export default AboutUs