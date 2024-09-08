import { FaqGroup, FaqHero } from '@/components/sections/FaqSection'
import React from 'react'

const Faq = () => {
  return (
    <section className="flex size-full flex-col">
      <FaqHero />
      <FaqGroup />
    </section>
  )
}

export default Faq