import React from 'react'
import ContactForm from './ContactForm'
import { contactBox, contactSocials } from '@/constants/page'
import Link from 'next/link'
import Image from 'next/image'

const ContactUs = () => {
    return (
        <section className='py-12 md:py-24'>
            <div className="container mx-auto max-w-[1280px] flex flex-col md:flex-row gap-12 md:gap-32 items-center">
                <div className="w-full md:w-1/2">
                    <h5 className="bodySubtext-orange">
                        Contact
                    </h5>
                    <h2 className="bodyText-dark">
                        Get in Touch With Us
                    </h2>
                    <p className="bodyParagraph-dark text-justify">
                        Lorem Ipsum is simply dummy text of the printin typesetting
                        dummy text ever  when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                    </p>

                    <div className="flex flex-col justify-center space-y-4 my-8">
                        {contactBox.map((item) => (
                            <div key={item.id} className='flex gap-y-4'>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={60}
                                    height={14}
                                    className='bg-gray-1 p-4 mr-4 md:mr-7'
                                />
                                <div>
                                    <h4 className='bodyText-dark-4'>{item.title}</h4>
                                    <Link href={item.link}>
                                        <p className='bodyParagraph-dark -mt-1'>{item.contact}</p>
                                    </Link>
                                </div>

                            </div>
                        ))}
                    </div>


                    <div>
                        <h2 className="bodyText-dark-3">
                            Follow us on social media
                        </h2>
                        <p className="bodyParagraph-dark -mt-3 text-justify">
                            Lorem Ipsum is simply dummy text of the printin typesetting
                            dummy text ever  when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div>
                            <div className='flex items-center space-x-4 -mt-1'>
                                {contactSocials.map((links) => {
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

                </div>
                <div className="w-full md:w-1/2">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactUs