import { Button } from '@/components/ui/button'
import { CausesCardData } from '@/constants/page'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CausesCard = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-1">
      <div className="container mx-auto max-w-[1280px] flex ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {CausesCardData.map((donation) => (
            <div key={donation.id} className="">
              <div className="relative">
                <Image
                  src={donation.image}
                  alt={donation.title}
                  width={400}
                  height={50}
                  className="object-cover md:w-[400px] w-[350px]"
                />
                <div className="absolute top-5 left-4 bg-white font-bold font-serif px-2 py-1 text-orange-1">
                  {donation.percentage}
                </div>
              </div>
              <div className="p-4 md:p-6 bg-white md:w-[400px] w-[350px]">
                <h3 className="h3">
                  {donation.title}
                </h3>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-4">
                    <div
                      style={{ width: donation.percentage }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-1"
                    />
                  </div>
                </div>
                <div className="flex justify-between text-gray-7000 mb-4">
                  <span className='spanDark'>Raised - {donation.raised}</span>
                  <span className='spanOrange'>Goal - {donation.goal}</span>
                </div>

                <Button className="button-dark max-md:mb-3">
                  <Link href={`/causes/${donation.id}`}>Donate</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CausesCard