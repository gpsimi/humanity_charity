import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

const HomeNewsletterAndBlog = () => {
    return (
        <div className="flex flex-col md:flex-row w-full mx-auto">
            {/* Subscribe Newsletter Section */}

            <div className="flex flex-col items-start justify-center bg-orange-1 py-6 md:p-12 w-full md:w-1/2 text-white">
                <div className='container max-w-[600px]'>
                    <h5 className="bodySubtext-white">
                        Subscribe
                    </h5>
                    <h3 className="bodyText-white">
                        Newsletter
                    </h3>
                    <p className='bodyParagraph-white -mt-3 max-w-[500px]'>
                        Sign up for our monthly newsletter to
                        get the latest news, volunteer opportunities,
                    </p>
                    <div className="">

                        <div className='flex space-x-3 items-center'>
                            <input
                                // {...register('email')}
                                placeholder="Enter Your Email Address"
                                className="inputStyle-1 rounded-full"
                            />
                            {/* {errors.email && <span className="inputSpan">{errors.email.message}</span>} */}
                            <Button type="submit" className="button-dark ">
                                Send
                            </Button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Recent Blog Section */}
            <div className="relative flex flex-col justify-center bg-homeBlog p-6 md:p-16 w-full md:w-1/2 text-white">
                <div className="absolute inset-0 bg-green-1 opacity-90" />
                <div className=' max-w-[600px] z-30'>
                    <h5 className="bodySubtext-dark">
                        Recent Blog
                    </h5>
                    <h3 className="bodyText-dark max-w-[500px]">
                        Take Look At Recent Blog Posts
                    </h3>
                    <Button className="button-dark max-md:w-full -mt-6" asChild>
                        <Link href="/blog">See our Blogs</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default HomeNewsletterAndBlog