import React from 'react'
import { HomeHero } from "@/constants/page";
import { Button } from '@/components/ui/button'
import Link from 'next/link'


const BlogHero = () => {
    return (
        <section className="flex h-screen md:h-[60vh] w-full bg-blog bg-cover bg-center relative">
            <div className="container mx-auto md:max-w-[1280px] flex flex-col h-full justify-center items-center lg:items-end z-30">
                <div className="bg-white p-12 flex flex-col space-y-5 max-w-lg  item-start">
                    <div className='flex items-start justify-start'>

                        <h4 className="text-3xl font-sans  ">
                            <span className="">
                                March 16, 2022
                            </span>
                            <span> | </span>
                            <span className="text-orange-1 ">
                                Nattasha
                            </span>
                        </h4>

                    </div>
                    <h2 className=''>Why Giving Is Impportant | Five Reaons to Donate</h2>
                    <p className='bodyText-dark font-sans'>
                        There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered
                    </p>
                    <Button variant="outline" className='rounded-full border-2 border-dark-1 uppercase'>
                        Read more
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default BlogHero
