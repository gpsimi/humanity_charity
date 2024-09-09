"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const FaqGroup = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  const faqs = [
    { question: 'Health in other Countries?', answer: 'Answer to health in other countries.' },
    { question: 'We Build and Create?', answer: 'Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.' },
    { question: 'Water Delivery in Africa?', answer: 'Answer to water delivery in Africa.' },
    { question: 'How to became a volunteer?', answer: 'Answer to how to become a volunteer.' },
    { question: 'How Do I Make Donation', answer: 'Answer to how to make a donation.' },
    { question: 'Health in other Countries?', answer: 'Answer to health in other countries.' },
  ];


  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-[1280px] flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="w-full md:w-[40%] flex justify-center">

          <div className="relative bg-cover bg-center bg-no-repeat w-full h-full">
            <Image
              src="/images/faq/image.png"
              alt="Faq Image"
              width={400}
              height={400}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-green-1 opacity-90 flex flex-col items-center justify-center p-4">
              <h2 className="text-white text-2xl font-bold">Any Question?</h2>
              <p className="text-white text-center">We are always here to help the needy peoples any where in the world</p>
              <button className="mt-4 bg-black text-white py-2 px-4 rounded">MAIL YOUR QUESTION</button>
            </div>
          </div>

          {/* <div className="bg-FaqImage relative bg-cover bg-center bg-no-repeat w-full  h-full">
            <div className="absolute inset-0 bg-green-1 opacity-90" />
            <div className="relative z-10 flex justify-center items-center w-full h-full">
              This is it
            </div>
          </div> */}




          {/* <div className="relative p">
            <div className='flex items-center '>
              <div className="absolute inset-0 bg-green-1 opacity-90" />
              <Image
                src="/images/faq/image.png"
                alt="Faq Image"
                width={400}
                height={400}
                className=" object-cover object-center"
              />
            </div>
            <p className="absolute flex  top-0 items-center justify-center">Lorem ipsum, dolor sit amet consectetur</p>
          </div> */}
        </div>


        <div className='w-full md:w-1/2'>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span>{activeIndex === index ? '▲' : '▼'}</span>
              </button>
              {activeIndex === index && (
                <div className="mt-2 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqGroup