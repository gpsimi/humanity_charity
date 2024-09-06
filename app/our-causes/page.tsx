import React from 'react'

import { CausesCard, CausesHero } from '@/components/sections/CausesSection'

const OurCauses = () => {
  return (
    <section className="flex size-full flex-col">
      <CausesHero />
      <CausesCard />
    </section>
  )
}

export default OurCauses