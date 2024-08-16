import React from 'react'
import { Button } from './ui/button'

const HeroCard = () => {
    return (
        <section className='max-md:pb-[500px] pb-[100px]'>
            <div className="container mx-auto max-w-[1200px] px-4 py-16">
                <div className="absolute -mt-[180px] left-0 right-0 container max-w-[1280px] mx-auto py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="bg-teal-500 py-8 px-6">
                            <h3 className="text-[20px] md:text-[25px] font-bold font-serif text-white">
                                Education
                            </h3>
                            <p className="text-white mt-2">
                                Below Poverty Line is a benchmark used by the government of India
                                to indicate economic disadvantage.
                            </p>
                            <Button className="bg-white text-teal-500 mt-4">Discover</Button>
                        </div>
                        <div className="bg-gray-800 py-8 px-6">
                            <h3 className="text-[20px] md:text-[25px] font-bold font-serif text-white">
                                Become a Volunteer
                            </h3>
                            <p className="text-white mt-2">
                                Below Poverty Line is a benchmark used by the government.
                            </p>
                            <Button className="bg-white text-gray-800 mt-4">Join Organization</Button>
                        </div>
                        <div className="bg-red-500 py-8 px-6">
                            <h3 className="text-[20px] md:text-[25px] font-bold font-serif text-white">
                                <span className="block">Join</span> Organization
                            </h3>
                            <p className="text-white mt-2">
                                Below Poverty Line is a benchmark used by the government.
                            </p>
                            <Button className="bg-white text-red-500 mt-4">Join Organization</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroCard