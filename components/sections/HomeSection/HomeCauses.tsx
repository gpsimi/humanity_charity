import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import PreviousNextMethods from '@/components/PreviousNextMethods'

const HomeCauses = () => {
    return (
        <section className='md:py-24 py-12 bg-gray-1'>
            <div className='container mx-auto max-w-[1280px] '>
                <div className='w-full flex flex-row justify-between items-start gap-x-16'>
                    <div className='w-full md:w-1/2'>
                        <h5 className="bodySubtext-orange">
                            Our Causes
                        </h5>
                        <h2 className="bodyText-dark">
                            You can help lots of people by donating little.
                        </h2>
                    </div>
                    <div className='w-full md:w-1/2 justify-end hidden md:flex'>
                        <Button className="button-orange max-md:w-full" asChild>
                            <Link href="/our-causes">More Causes</Link>
                        </Button>
                    </div>
                </div>

                <div className='mt-8'>
                    <PreviousNextMethods />
                </div>


                <div className='md:hidden flex mt-8'>
                    <Button className="button-orange max-md:w-full" asChild>
                        <Link href="/our-causes">More Causes</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HomeCauses