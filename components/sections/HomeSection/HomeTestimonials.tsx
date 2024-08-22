import HomeTestimonialsCard from '@/components/HomeTestimonialsCard'
import React from 'react'

const HomeTestimonials = () => {
  return (
    <section className='md:py-24 py-12'>
      <div className='container mx-auto max-w-[1280px] '>
        <div className='flex flex-col items-center justify-center mb-9'>
          <h5 className="bodySubtext-orange">
            Testimonials
          </h5>
          <h2 className="bodyText-dark text-center">
            What People Say About Us
          </h2>
        </div>

        <div className=''>
          <HomeTestimonialsCard />
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonials