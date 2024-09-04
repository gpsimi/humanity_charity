import React from 'react'
import AboutHero from '@/components/sections/AboutSection/AboutHero'
import AboutAbout from '@/components/sections/AboutSection/AboutAbout'
import AboutBrands from '@/components/sections/AboutSection/AboutBrands'

const AboutUs = () => {
  return (
    <section className="flex size-full flex-col">
      <AboutHero />
      <AboutAbout />
      <AboutBrands />

    </section>
  )
}

export default AboutUs