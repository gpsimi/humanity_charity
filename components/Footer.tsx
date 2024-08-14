'use client'

import React from "react";
import { footerLinks, footersocials } from "@/constants/page";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from '@/lib/utils';

const Footer = () => {

  const pathname = usePathname();

  return (
    <section className="w-full z-50 bg-dark-1 py-4">
      <div className="container mx-auto md:max-w-[1280px] flex justify-between md:flex-row flex-col py-8 gap-8">
        <div className="max-w-sm flex flex-col gap-y-4">
          <Link href="/" className='flex items-center'>
            <Image
              src="/images/footer/footer-logo.svg"
              width={150}
              height={40}
              alt='Humanity Logo'
              className=''
            />
          </Link>

          <div className="flex">
            <p className="text-white text-start text-[14px]">
              Care about people to transforming their lives
              and exudes a positives Impressiono believe. fundraising
              NGO organizations.
            </p>
          </div>


          {/* //Footer Socials */}

          <ul>
            <li className="flex gap-3 items-center">
              {footersocials.map((link) => {
                return (
                  <Link
                    href={link.route}
                    target="_blank"
                    key={link.label}
                    className="bg-green-4 p-3 rounded-full"
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


        {/* //Footer Links */}

        <div className="bg-green-4 py-8 px-5 flex">
          <ul className="flex md:flex-row flex-col gap-8 md:gap-16">
            {footerLinks.map((item) => {



              return (



                <li key={item.title}>
                  <h4 className="text-white font-serif text-[18px] mb-4">
                    {item.title}
                  </h4>
                  <ul>
                    {item.mainLinks.map((link) => {

                      const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);

                      return (

                        <li key={link.label} className="mb-1">
                          <Link
                            href={link.route}
                            className={cn("text-white text-sm hover:text-orange-1", { "text-orange-1": isActive, })}
                          >
                            {link.label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )

            })}
          </ul>
        </div>
      </div>



      {/* //Divider */}

      <hr className="border-gray-500 mb-5" />



      {/* //Copyright */}

      <div className="mb-2 container mx-auto">
        <p className="text-white text-center text-[14px]">
          Copyright © Walfare | Designed by VictorFlow Templates - Powered by
          Webflow
        </p>
      </div>
    </section>
  );
};

export default Footer;