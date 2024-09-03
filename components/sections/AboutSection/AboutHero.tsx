import React from 'react'
import GeneralHeroImage from '@/components/GeneralHeroImage'
import { HERO_SECTIONS } from '@/constants/page';

const AboutHero = () => {
  return (
    <div>
      <GeneralHeroImage {...HERO_SECTIONS.AboutPage} />
    </div>
  )
}

export default AboutHero