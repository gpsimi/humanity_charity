import { TeamHero, TeamSubscribe, TeamTeam } from '@/components/sections/TeamSection'
import React from 'react'

const OurTeam = () => {
  return (
    <section className="flex size-full flex-col">
      <TeamHero />
      <TeamTeam />
      <TeamSubscribe />
    </section>
  )
}

export default OurTeam