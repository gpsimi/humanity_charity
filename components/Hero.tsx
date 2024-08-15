import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
    return (
        <div className="flex h-screen md:h-[85vh] w-full bg-hero bg-cover relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-dark- opacity-80" />
                <div className="container mx-auto md:max-w-[1280px] flex flex-col h-full justify-center items-start z-50">
                    <h5 className="text-white font-mono text-[30px] md:text-[35px]">
                        Need Help...
                    </h5>
                    <h2 className="text-white font-serif text-[35px] md:text-6xl  max-w-xl font-bold my-4 md:my-6">
                        Being Life Saver For Someone
                    </h2>

                    <div className="flex flex-row items-center mb-4 md:mb-6">
                        <div className="flex items-center">
                            <div className="bg-white p-2 rounded-full"/>
                            <div className="h-[1px] w-24 md:w-48 bg-white"/>
                        </div>  
                        <p className="text-white text-sm md:text-md font-normal border border-white px-2 rounded-full">Below the Poverty Line</p>
                    </div>
                    

                    <div className="flex flex-row gap-4">
                        <Button className='bg-orange-1 py-4 px-8 md:px-12 rounded-full text-white uppercase md:text-md'>Donate</Button>
                        <Button className='bg-white py-4 px-8 md:px-12 rounded-full text-orange-1 uppercase md:text-md'>Discover</Button>
                    </div>
                </div>
            

            {/* <div className="absolute bottom-0 left-0 right-0  container max-w-[1280px] mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 ">
                    <div className="bg-green-1 py-8 px-6">
                        <h3 className="text-[20px] md:text-[25px] font-bold font-serif text-white">Education</h3>
                    </div>
                    <div className="bg-dark-1 py-8 px-6">
                        <h3 className="text-[20px] md:text-[25px] font-bold font-serif text-white">Become <br /> a Volunter</h3>
                    </div>
                    <div className="bg-orange-1 py-8 px-6">
                        <h3 className="text-[20px] md:text-[25px] font-bold"></h3>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Hero;
