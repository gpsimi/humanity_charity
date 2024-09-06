import { Button } from '@/components/ui/button'
import { TeamTeamData } from '@/constants/page'
import { LucideThermometerSnowflake } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TeamTeam = () => {
    return (
        <section className='md:py-24 py-12 bg-gray-1'>
            <div className='container mx-auto max-w-[1280px]'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 md:gap-8">
                    {TeamTeamData.map((item) => (
                        <div key={item.name} className="flex flex-col space-y-9">
                            <Image
                                src={item.image}
                                width={300}
                                height={100}
                                alt={item.name}
                                className='min-w-full'
                            />
                            <div className='flex items-center flex-col space-y-3 mt-6'>
                                <h3 className='text-xl font-bold font-serif'>{item.name}</h3>
                                <div className='flex space-x-2'>
                                    {item.socials.map((links) => {
                                        return (
                                            <Link
                                                href={links.link}
                                                target="_blank"
                                                key={links.label}
                                                className=""
                                            >
                                                <Image
                                                    src={links.icon}
                                                    alt={links.label}
                                                    width={20}
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
                </div>
            </div>
        </section>
    )
}

export default TeamTeam