import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomeProjects = () => {
    return (
        <div className="w-full">
            <div className="group relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                <div className='flex relative col-span-2 sm:col-span-1 md:col-span-2 py-12 px-6 md:p-20 bg-dark-3'>
                    <div className='flex flex-col items-start justify-center'>

                        <h5 className="bodySubtext-orange">
                            What We Did
                        </h5>
                        <h2 className="bodyText-white ">
                            Featured Projects
                        </h2>
                        <p className="bodyParagraph-white max-w-lg">
                            Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <Button className="button-orange max-md:w-full" asChild>
                            <Link href="/our-projects">More Project</Link>
                        </Button>
                    </div>
                </div>

                <div className='group relative flex col-span-2'>
                    <div className='col-span-1 w-full'>
                        <Image
                            src='/images/home/home-project/image01.png'
                            width={1000}
                            height={500}
                            alt='Home-Project-01'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='col-span-1 w-full'>
                        <Image
                            src='/images/home/home-project/image02.png'
                            width={1000}
                            height={500}
                            alt='Home-Project-01'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>



                <div className='col-span-2 sm:col-span-1 lg:col-span-2 md:flex w-full'>

                    <div className='col-span-1 w-full'>
                        <Image
                            src='/images/home/home-project/image03.png'
                            width={1000}
                            height={500}
                            alt='Home-Project-01'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='col-span-1 w-full'>
                        <Image
                            src='/images/home/home-project/image04.png'
                            width={1000}
                            height={500}
                            alt='Home-Project-01'
                            className='w-full h-full object-cover'
                        />
                    </div>


                </div>

                <div className='flex col-span-2'>
                    <div className='col-span-1'>
                        <Image
                            src='/images/home/home-project/image01.png'
                            width={1000}
                            height={500}
                            alt='Home-Project-01'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='col-span-1'>
                        <Image
                            src='/images/home/home-project/image05.png'
                            width={1000}
                            height={500}
                            alt='Home-Project-01'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeProjects;
