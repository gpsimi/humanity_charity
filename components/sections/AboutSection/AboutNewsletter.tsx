import { Button } from '@/components/ui/button'
import React from 'react'

const AboutNewsletter = () => {
    return (
        <section className='py-12 md:py-24 bg-hero bg-cover relative'>
            <div className="absolute inset-0 bg-orange-1 opacity-90" />
            <div className="container mx-auto max-w-[1280px] flex md:items-center md:justify-center z-1">
                <div className="flex flex-col md:items-center z-30 space-y-1">
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
                    {/* <div className="">

                        <div className='flex space-x-3 items-center'>
                            <input
                                placeholder="Enter Your Email Address"
                                className="inputStyle-1 rounded-full"
                            />
                            <Button type="submit" className="button-dark">
                                Send
                            </Button>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default AboutNewsletter