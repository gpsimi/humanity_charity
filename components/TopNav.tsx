import { contactdetails, navsocials } from '@/constants/page'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TopNav = () => {
  return (
    <div className="bg-green-1 max-md:hidden">
      <div className="container mx-auto max-w-[1280px] flex justify-between items-center">

        <div className='flex gap-6'>
          <div className='flex gap-2'>
            <Image
              src="/icons/Phone.svg"
              width={14}
              height={14}
              alt='phone-icon'
            />
            <p className='text-sm font-sans font-bold text-green-3'>+01 569 896 654</p>
          </div>
          <div className='flex gap-2'>
            <Image
              src="/icons/mail.svg"
              width={20}
              height={20}
              alt='phone-icon'
            />
            <p className='text-sm font-sans font-bold text-green-3'>info@charity.com</p>
          </div>
        </div>


        <ul className='bg-green-2 py-3 px-6 '>
          <li className='flex gap-3 items-center'>
            {navsocials.map((link) => {
              return (
                <Link
                  href={link.route}
                  target='_blank'
                  key={link.label}
                >
                  <Image
                    src={link.imgUrl}
                    alt={link.label}
                    width={20}
                    height={14}
                  />
                </Link>
              )
            })}
          </li>
        </ul>

      </div>
    </div>
  )
}

export default TopNav