import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutAbout = () => {
    return (
        <section className='py-12 md:py-24'>
            <div className="container mx-auto max-w-[1280px] relative flex md:flex-row flex-col gap-8">
                <div className='w-full md:w-1/2 '>
                    <Image
                        src="/images/about/about.png"
                        alt="About Image"
                        width={600}
                        height={100}
                        className="w-full"
                    />
                    <div className='absolute -bottom-16 -left-8 bg-dark-1 px-8 py-8 hidden md:flex space-x-4'>
                        <Image
                            src="/images/about/quote.svg"
                            alt="About Image"
                            width={60}
                            height={50}
                            className=""
                        />
                        <p className='text-white font-bold text-sm md:text-lg font-serif'>He is truly great who <br /> hath a great charity.</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 gap-x-16'>
                    <h5 className="bodySubtext-orange">
                        About Us
                    </h5>
                    <h2 className="bodyText-dark">
                        Help People, <br />
                        Our Main Goals
                    </h2>
                    <p className="bodyParagraph-dark">
                        Lorem Ipsum is simply dummy text of the printin 
                        typesetting  dummy text ever  when an unknown printer 
                        took a galley of type and scrambled it to make a type 
                        specimen book. 
                    </p>
                    <p className="bodyParagraph-dark">
                    Save the Children believes every child deserves a future.
                    </p>
                    <Button className="button-orange max-md:w-full" asChild>
                        <Link href="/about-us">More About</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default AboutAbout