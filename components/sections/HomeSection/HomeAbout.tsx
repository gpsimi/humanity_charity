import { Button } from '@/components/ui/button'
import { homeAbout } from '@/constants/page'
import { CheckCircleIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const HomeAbout = () => {

  return (
    <section className='md:py-24 py-12'>
      <div className='container mx-auto max-w-[1280px] '>
        <div className='flex flex-col md:flex-row gap-8'>

          <div className='w-full md:w-1/2 gap-x-16'>
            <h5 className="bodySubtext-orange">
              Need Help...
            </h5>
            <h2 className="bodyText-dark">
              Help People, <br />
              Our Main Goals
            </h2>
            <p className="bodyParagraph-dark">
              Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br /> <br />
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining when an unknown printer took a galley of type and scrambled it to make a type specimen book. essentially.
            </p>
            <Button className="button-orange max-md:w-full" asChild>
              <Link href="/about-us">More About</Link>
            </Button>
          </div>

          <div className='w-full md:w-1/2'>
            <div className="bg-gray-2 p-4 md:p-12 gap-y-4 flex flex-col  mx-auto">
              <ul className="grid grid-cols-2 gap-2 mb-4">
                {homeAbout.map((item) => (
                  <li className='flex '>
                    <div className='flex items-center justify-between gap-2'>
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={15}
                        height={10}
                        className='w-[20px] h-[20px]'
                      />
                      <p className='text-dark-2'>{item.label}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div>
                <h3 className="h3">Total Donation</h3>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-4">
                    <div
                      style={{ width: "50%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-1"
                    />
                  </div>
                </div>
                <div className="flex justify-between text-gray-7000 mb-4">
                  <span className='spanDark'>Collection - $5M</span>
                  <span className='spanDark'>Goal - $10M</span>
                </div>
              </div>

              <div className=''>
                <Button className="button-white max-md:w-full">
                  DONATE NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout