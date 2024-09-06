import React from 'react'

const EventForm = () => {
    return (
        <section className='py-12 md:py-24 bg-gray-1'>
            <div className='container mx-auto max-w-[1280px] flex flex-col md:flex-row gap-6 md:gap-16'>
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
                </div>
                <div className="w-full md:w-1/2">
                    Right
                </div>
            </div>
        </section>
    )
}

export default EventForm