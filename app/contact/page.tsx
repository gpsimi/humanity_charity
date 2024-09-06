import { ContactHero, ContactUs } from '@/components/sections/ContactSection'
import React from 'react'

const Contact = () => {
  return (
    <section className="flex size-full flex-col">
      <ContactHero />
      <ContactUs />
    </section>
  )
}

export default Contact