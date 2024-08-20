import { Button } from '@/components/ui/button'
import VolunteerForm from '@/components/VolunteerForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeVolunteer = () => {
  return (
    <section className='flex items-center md:py-24 py-12 bg-homeVolunteers relative bg-cover bg-center bg-no-repeat w-full h-full'>
      <div className='absolute top-0 left-0 glassmorphism2 w-full h-full' />
      <div className='container mx-auto max-w-[1280px] z-30'>
        <div className='flex flex-col md:flex-row gap-8 items-center justify-end'>

          <div className='w-full md:w-1/2 gap-x-16'>
            <h5 className="bodySubtext-white">
              How We Help
            </h5>
            <h2 className="bodyText-white max-w-sm">
              Join The Community To Give Education For Children
            </h2>
            <p className="bodyParagraph-white max-w-lg ">
              Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br />
            </p>

            <Image
              src="/images/home/volunteer.png"
              width={450}
              height={200}
              alt=''
              className='mb-8'
            />

            <Button className="button-orange max-md:w-full" asChild>
              <Link href="/about-us">Donate Now</Link>
            </Button>
          </div>


          <div className='w-full md:w-1/2 '>

            <VolunteerForm />

          </div>

        </div>
      </div>
    </section>
  )
}

export default HomeVolunteer