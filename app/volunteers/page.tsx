import React from 'react'
import {
  EventForm,
  HelpFirst,
  MorePeople,
  VolunteerHero
} from '@/components/sections/VolunteerSection'

const Volunteers = () => {
  return (
    <section className="flex size-full flex-col">
      <VolunteerHero />
      <HelpFirst />
      <MorePeople />
      <EventForm />
    </section>
  )
}

export default Volunteers