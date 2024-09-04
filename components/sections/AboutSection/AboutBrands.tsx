import Brands from '@/components/Brands'
import React from 'react'

const AboutBrands = () => {
    return (
        <section className='py-8 md:py-16 '>
            <div className="container mx-auto max-w-[1280px] max-md:px-10">
                <div className="flex-1 h-[2px] bg-border-1/50 mb-8" />
                <Brands />
                <div className="flex-1 h-[2px] bg-border-1/50 mt-6" />
            </div>
        </section>
    )
}

export default AboutBrands