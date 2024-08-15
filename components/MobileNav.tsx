'use client'

import React, { useState } from 'react'

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'

import { navLinks, NavItem } from '@/constants/page'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';



const MobileNav = () => {

    const pathname = usePathname();

    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger asChild>
                    <Image
                        src="/icons/hamburger.svg"
                        width={25}
                        height={36}
                        alt='hamburger icon'
                        className='cursor-pointer sm:hidden'
                    />
                </SheetTrigger>
                <SheetContent side='left' className='border-none bg-dark-1'>
                    
                    <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
                        <SheetClose asChild>
                            <section className='flex h-full flex-col gap-6 pt-16 text-white'>
                                {navLinks.map((item) => {
                                    const isActive = pathname === item.route;

                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link
                                                href={item.route}
                                                key={item.label}
                                                className={cn("flex gap-4 items-center p-4 rounded-lg w-full max-w-60", { "text-orange-1": isActive, })}
                                            >
                                                <p className="font-semibold">
                                                    {item.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                            </section>
                        </SheetClose>
                    </div>

                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav