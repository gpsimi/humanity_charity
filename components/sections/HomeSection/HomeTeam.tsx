import { Button } from '@/components/ui/button';
import { HomeTeamData } from '@/constants/page';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const HomeTeam = () => {
    return (
        <section className='md:py-24 py-12 bg-gray-1'>
            <div className='container mx-auto max-w-[1280px]'>
                <div className='flex flex-col items-center justify-center mb-9'>
                    <h5 className="bodySubtext-orange">
                        Team
                    </h5>
                    <h2 className="bodyText-dark text-center ">
                        Meet Our Volunteers
                    </h2>
                </div>

                <div className=''>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 md:gap-5">
                        {HomeTeamData.map((item) => (
                            <div key={item.name} className="flex flex-col">
                                <Image
                                    src={item.image}
                                    width={300}
                                    height={100}
                                    alt={item.name}
                                    className='w-full'
                                />
                                <div className='flex items-center flex-col space-y-3 mt-6'>
                                    <h3 className='text-xl font-bold font-serif'>{item.name}</h3>
                                    <div className='flex '>
                                        {item.socials.map((links) => {
                                            return (
                                                <Link
                                                    href={links.link}
                                                    target="_blank"
                                                    key={links.label}
                                                    className=" hover:bg-green-1 p-2 rounded-full"
                                                >
                                                    <Image
                                                        src={links.icon}
                                                        alt={links.label}
                                                        width={15}
                                                        height={14}
                                                        className='w-full'
                                                    />
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className='flex flex-col items-center justify-center bg-green-1 py-8 px-8'>
                            <Image
                                src="/images/home/home-team/Icon.svg"
                                width={90}
                                height={30}
                                alt='volunteer-icon'
                                className='mb-9'
                            />
                            <div className='text-center'>
                                <h2 className='h3'>Become a Volunteer</h2>
                                <p className='bodyParagraph-dark'>
                                    Centuries but also the leap  electtypesetting, remaining
                                </p>
                                <Button className='button-dark px-8 w-full' asChild>
                                    <Link href="/">Join Us today</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeTeam