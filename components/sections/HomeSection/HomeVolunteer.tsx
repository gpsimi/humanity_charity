import React from 'react'

const HomeVolunteer = () => {
  return (
    <section className='md:py-24 py-12 bg-homeVolunteers relative bg-cover bg-center bg-no-repeat w-full h-[400px]'>
      <div className='absolute w-full top-0 left-0 glassmorphism2 h-[400px]'/>  
        <div className='relative container mx-auto max-w-[1280px] z-50'>
          <div className='flex flex-col md:flex-row gap-8'>
            <div className='w-full md:w-1/2'>
              <p className='text-white'>Left</p>
            </div>
            <div className='w-full md:w-1/2'>
              <p className='text-white'>Right</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HomeVolunteer