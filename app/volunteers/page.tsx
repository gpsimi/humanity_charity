import { HelpFirst, MorePeople, VolunteerHero } from '@/components/sections/VolunteerSection'
import React from 'react'

const Volunteers = () => {
  return (
    <section className="flex size-full flex-col">
      <VolunteerHero />
      <HelpFirst />
      <MorePeople />
    </section>
  )
}

export default Volunteers