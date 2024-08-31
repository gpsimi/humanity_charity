import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const HomeEvents = () => {
  return (
    <section className="py-12 md:py-24">
        <div className="container mx-auto max-w-[1280px]">
        <div className='w-full flex flex-row justify-between items-start gap-x-16'>
                    <div className='w-full md:w-1/2'>
                        <h5 className="bodySubtext-orange">
                            Our Events
                        </h5>
                        <h2 className="bodyText-dark">
                            Join Upcoming Events Replays & Webinars
                        </h2>
                    </div>
                    <div className='w-full md:w-1/2 justify-end hidden md:flex'>
                        <Button className="button-orange max-md:w-full" asChild>
                            <Link href="/">More Events</Link>
                        </Button>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default HomeEvents