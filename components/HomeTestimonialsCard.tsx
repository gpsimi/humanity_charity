"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import Slider from "react-slick";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { homeTestimonial } from "@/constants/page";


const HomeTestimonialsCard = () => {
    let sliderRef = useRef<any>(null);
    const next = () => {
        sliderRef.current?.slickNext();
    };
    const previous = () => {
        sliderRef.current?.slickPrev();
    };
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <section className="">

            <div className="">
                <Slider
                    ref={sliderRef}
                    {...settings}
                >
                    {homeTestimonial.map((item) =>(
                        <div key={item.id} className="relative flex space-x-10">
                            <div className="space-x-9">
                                <div className="bg-gray-2 flex items-center p-5 gap-6">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={120}
                                        height={60}
                                        className="h-full"
                                    />

                                    <div>
                                        <div className="flex flex-col">
                                            <h2 className="h3">{item.name}</h2>
                                            <p className="bodyParagraph-dark -mt-2">{item.position}</p>
                                        </div>
                                        <p className="bodyParagraph-dark text-justify max-w-sm -mt-2">{item.testimony}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    

                </Slider>
                <div className=" mt-6 md:mt-12 flex gap-8 md:gap-32 justify-center">
                    <Button variant="outline" className="bg-white rounded-full" size="icon" onClick={previous}>
                        <ChevronLeft className="h-5 w-8 text-dark-1" />
                    </Button>
                    <hr className="border-black mb-5" />
                    <Button variant="outline" className="bg-white rounded-full" size="icon" onClick={next}>
                        <ChevronRight className="h-5 w-8 text-dark-1" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HomeTestimonialsCard