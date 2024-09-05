import React from 'react'
import GeneralHeroImage from '@/components/GeneralHeroImage'
// import { HERO_SECTIONS } from '@/constants/page';
import HeroSection from '@/components/GeneralHeroImage';

const AboutHero = () => {
  return (
    <div>
      <HeroSection page="AboutPage" />
      {/* <GeneralHeroImage {...HERO_SECTIONS.AboutPage} /> */}
    </div>
  )
}

export default AboutHero