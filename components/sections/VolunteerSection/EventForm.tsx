import React from 'react'
import FormEvent from '@/components/FormEvent';
import { Button } from '@/components/ui/button';
import { steps } from '@/constants/page';


const EventForm = () => {

    return (
        <section className='py-12 md:py-24 bg-gray-1'>
            <div className='container mx-auto max-w-[1280px] flex flex-col md:flex-row items-center gap-12 md:gap-16'>
                <div className="w-full md:w-1/2">
                    <h5 className="bodySubtext-orange">
                        Help The People With us
                    </h5>
                    <h2 className="bodyText-dark">
                        Need Your Heartful Help
                    </h2>
                    <p className="bodyParagraph-dark text-justify">
                        Lorem Ipsum is simply dummy text of the
                        printin typesetting  dummy text ever  when an
                        unknown printer took a galley of type and scrambled
                        it to make a type specimen book.
                        <br /> <br />
                        Bring to the table win-win survival strategies
                        to proactive domination.  is on the runway heading
                        towards a streamlined cloud solution. User gener eal-time
                        will have multiple touch points for offshoring
                    </p>

                    <div className="flex items-start max-w-md">
                        <div className="mx-auto">
                            {steps.map((step) => (
                                <div key={step.id} className="flex items-start space-x-4">
                                    <p className="text-white bodyText-white-2 p-2 bg-orange-2 rounded-full">
                                        {step.id}
                                    </p>
                                    <div className='max-w-lg'>
                                        <h3 className="bodyText-dark-2">{step.title}</h3>
                                        <p className="bodyParagraph-dark -mt-3 md:-mt-5">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                            <Button type="submit" className="mt-4 button-white">
                                Submit Now
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <FormEvent />
                </div>
            </div>
        </section>
    )
}

export default EventForm