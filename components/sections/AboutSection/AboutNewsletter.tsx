import React from 'react'
import { Button } from '@/components/ui/button'

const AboutNewsletter = () => {
    return (
        <section className='py-12 md:py-24 bg-aboutNewsletter bg-cover relative'>
            <div className="absolute inset-0 bg-orange-1 opacity-90" />
            <div className="container mx-auto max-w-[1280px] flex md:items-center md:justify-center z-1">
                <div className="flex flex-col md:items-center z-30 space-y-3 md:space-y-4">
                    <h5 className="bodySubtext-white">
                        Subscribe
                    </h5>
                    <h3 className="bodyText-white">
                        Newsletter
                    </h3>
                    <p className='bodyParagraph-white md:text-center -mt-3 max-w-[500px] '>
                        Sign up for our monthly newsletter to
                        get the latest news, volunteer opportunities,
                    </p>

                    <div className='space-x-2 mt-2'>
                        <input 
                            type="name" 
                            placeholder="Enter Your Email Address"
                            className='rounded-full inputStyle-2'

                        />
                        <Button type="submit" className="button-dark">
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutNewsletter