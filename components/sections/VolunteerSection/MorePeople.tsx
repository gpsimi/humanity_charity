import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MorePeople = () => {
    return (
        <section className='py-2 pb-12 md:pb-24'>
            <div className="container mx-auto max-w-[1280px] relative flex flex-col-reverse md:flex-row gap-3 md:gap-16 items-center">
            <div className="w-full md:w-1/2">
                    <Image
                        src="/images/volunteer/image-2.png"
                        width={600}
                        height={100}
                        alt=""
                        className="w-full"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="bodyText-dark">
                        More People More <br /> Impact
                    </h2>
                    <p className="bodyParagraph-dark text-justify">
                        Lorem Ipsum is simply dummy text of the printin
                        typesetting  dummy text ever  when an unknown printer 
                        took a galley of type and scrambled it to make a type 
                        specimen book.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MorePeople