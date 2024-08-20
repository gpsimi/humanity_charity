import VolunteerForm from '@/components/VolunteerForm'
import React from 'react'

const HomeVolunteer = () => {
  return (
    <section className='flex items-center md:py-24 py-12 bg-homeVolunteers relative bg-cover bg-center bg-no-repeat w-full h-[80vh]'>
      <div className='absolute top-0 left-0 glassmorphism2 w-full h-[80vh]'/>  
        <div className='relative container mx-auto max-w-[1280px] z-30'>
          <div className='flex flex-col md:flex-row gap-8 items-center justify-end'>
            
            <div className='w-full md:w-1/2'>
              <p className='text-white'>
                Left
              </p>
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