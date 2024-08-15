import React from 'react'

const Hero = () => {
    return (
        <div className="flex h-screen md:h-[85vh] w-full bg-hero bg-cover ">
            <div className='bg-gray-800 bg-opacity-50 w-full h-full'>
                <div className="container mx-auto md:max-w-[1280px] flex flex-col h-full justify-center items-start md:gap-y-4 ">
                    <h5 className='text-white font-mono text-[30px] md:text-[35px]'>Need Help...</h5>
                    <h2 className='text-white font-serif text-[35px] md:text-6xl  max-w-xl font-bold'>Being Life Saver For Someone</h2>
                </div>
            </div>
        </div>
    )
}

export default Hero