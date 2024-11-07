import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HelpFirst = () => {
    return (
        <div className='py-12 md:py-24'>
            <div className="container mx-auto max-w-[1280px] relative flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                <div className="w-full md:w-1/2">
                    <h5 className="bodySubtext-orange">
                        Help First
                    </h5>
                    <h2 className="bodyText-dark">
                        Let's help together
                    </h2>
                    <p className="bodyParagraph-dark text-justify">
                        Lorem Ipsum is simply dummy text of the printin typesetting
                        dummy text ever  when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                        <br /> <br />
                        It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. essentially.
                    </p>
                    <Button className="button-dark max-md:w-full" asChild>
                        <Link href="tel:5555555555" className=''>Call : +000 365 698</Link>
                    </Button>
                </div>
                <div className="w-full md:w-1/2">
                    <Image
                        src="/images/volunteer/image-1.png"
                        width={700}
                        height={100}
                        alt=""
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default HelpFirst