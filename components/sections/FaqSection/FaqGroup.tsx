import Image from 'next/image'
import React from 'react'

const FaqGroup = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-[1280px] flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="w-full md:w-1/2 e flex justify-center">
          <div>
            <div className='relative'>
              <div className="absolute inset-0 bg-green-1 opacity-90" />
              <Image
                src="/images/faq/image.png"
                alt="Faq Image"
                width={400}
                height={400}
                className="object-cover object-center"
              />
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>
        </div>
        <div className='w-full md:w-1/2 flex'>
          Question
        </div>
      </div>
    </section>
  )
}

export default FaqGroup