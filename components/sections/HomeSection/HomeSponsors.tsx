import Brands from '@/components/Brands'
import { clientNumber } from '@/constants/page'
import React from 'react'

const HomeSponsors = () => {
  return (
    <section className='md:py-4 py-6'>
      <div className='container mx-auto max-w-[1280px] space-y-10 pb-10'>
        <div className="grid lg:grid-col-4 md:grid-cols-4 grid-cols-1 gap-8">
          {clientNumber.map((items) => (
            <div key={items.id} className="flex flex-col items-center  justify-center space-y-4">
              <h2 className="text-4xl font-serif font-extrabold text-dark-1">{items.heading}</h2>
              <p className="text-dark-1 font-sans text-[18px] mb-5 text-center">{items.description}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 h-[2px] bg-border-1/50 " />
        <div className=''>
          <Brands />
        </div>
      </div>
    </section>
  )
}

export default HomeSponsors