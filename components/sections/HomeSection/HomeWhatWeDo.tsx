import { WhatWeDo } from '@/constants/page'
import Image from 'next/image'
import React from 'react'

const HomeWhatWeDo = () => {
    return (
        <section className='md:py-24 py-12'>
            <div className='container mx-auto max-w-[1280px] '>
                <div className='flex flex-col items-center justify-center mb-9'>
                    <h5 className="bodySubtext-orange">
                        What we do
                    </h5>
                    <h2 className="bodyText-dark text-center">
                        We do it for People in Need
                    </h2>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10'>
                        {WhatWeDo.map((item) => (
                            <div key={item.id} className='flex flex-col items-center space-y-3'>
                                <Image
                                    src={item.icon}
                                    width={50}
                                    height={10}
                                    alt={item.title}
                                />
                                <h3 className='text-center h3'>{item.title}</h3>
                                <p className='text-center bodyParagraph-dark max-'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeWhatWeDo