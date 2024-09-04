import { goalAndMission } from '@/constants/page'
import Image from 'next/image'
import React from 'react'

const GoalAndMission = () => {
    return (
        <section className="py-8 md:py-24">
            <div className="container mx-auto max-w-[1280px] flex flex-col-reverse md:flex-row gap-8 md:gap-16">
                <div className="w-full md:w-1/2  max-md:mt-20">

                    <h2 className="bodyText-dark">
                        Our Goals
                    </h2>
                    <p className="bodyParagraph-dark max-md:text-justify">
                        Lorem Ipsum is simply dummy text of the
                        typesetting  dummy text ever  when an unknown
                        printer took a galley of type and scrambled type
                        specimen book.
                    </p>
                    <div className='flex flex-wrap gap-y-4 gap-x-5 my-7'>
                        {goalAndMission.map((item) => (
                            <div key={item.id} className='flex items-center space-x-2 bg-gray-3 px-4 py-2 rounded-full'>
                                <Image  
                                    src={item.image} 
                                    width={24} 
                                    height={24} 
                                    alt={item.text}
                                    className='' 
                                />
                                <p className='bodyParagraph'>{item.text}</p>
                            </div>
                        ))}    
                    </div>
                    <p className="bodyParagraph-dark max-md:text-justify">
                        Lorem Ipsum is simply dummy text of the
                        typesetting  dummy text ever  when an unknown
                        printer took a galley of type and scrambled type
                        specimen book.
                    </p>
                </div>

                <div className="w-full md:w-1/2 relative">
                    <h2 className="bodyText-dark">
                        Our Mission
                    </h2>
                    <p className="bodyParagraph-dark max-md:text-justify">
                        Lorem Ipsum is simply dummy text of the
                        typesetting  dummy text ever  when an unknown
                        printer took a galley of type and scrambled type
                        specimen book.
                    </p>

                    <Image
                        src="/images/about/mission-image.png"
                        width={600}
                        height={100}
                        alt="About Image"
                        className="w-full"
                    />
                    <div className='bg-green-1 absolute left-8 -bottom-14 md:-bottom-16 p-2 md:p-6 max-md:max-w-56'>
                        <p className='text-center font-semibold text-xl md:text-4xl font-serif'>
                            20000+
                        </p>
                        <p className='bodyParagraph text-center'>
                            Thousand of People Helped
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default GoalAndMission